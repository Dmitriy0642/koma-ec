import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Cart from "@/app/models/Cart";
import Product from "@/app/models/Product";
import { cookies } from "next/headers";
interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  try {
    await ConnectDataBase();
    const id = params.id;
    const findByUserId = await Cart.findOne({ userId: id });
    if (!findByUserId) {
      return NextResponse.json({
        message: "You don't have any items in your cart",
      });
    } else {
      return NextResponse.json(findByUserId);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    const selectedSizeFromShelter = data.selectedSizeFromShelter;
    const userId = data.userId;
    const selectedProduct = data.items[0];
    const prodId = selectedProduct.prodId;
    const selectedSizes = selectedProduct.sizes;

    const findProductInShelter = await Product.findById(prodId);
    let cart = await Cart.findOne({ userId: userId });

    if (!findProductInShelter) {
      return NextResponse.json(
        { message: "That product doesn't exist" },
        { status: 500 }
      );
    }

    if (!cart) {
      // Создаем новую корзину, если её нет
      cart = new Cart({
        userId: userId,
        items: [selectedProduct],
      });
      await cart.save();
      return NextResponse.json(cart);
    } else {
      // Поиск товара с указанным prodId в корзине
      const existingItem = cart.items.find(
        (item: any) => item.prodId === prodId
      );

      if (!existingItem) {
        // Если товар с указанным prodId не найден в корзине, добавляем новый
        cart.items.push(selectedProduct);
        await cart.save();
        return NextResponse.json(cart);
      } else {
        // Если товар с указанным prodId уже есть в корзине, работаем с размерами
        const sizeFromUser = selectedSizes[0].size;
        const sizeInCart = existingItem.sizes.find(
          (item: any) => item.size === sizeFromUser
        );
        if (sizeInCart) {
          // Если размер уже существует в корзине, увеличиваем его value, если возможно
          if (sizeInCart.size === selectedSizeFromShelter.size) {
            if (
              sizeInCart.value + selectedSizes[0].value <=
              selectedSizeFromShelter.value
            ) {
              sizeInCart.value += selectedSizes[0].value;

              await cart.save();
              return NextResponse.json(cart);
            } else {
              return NextResponse.json(
                {
                  message:
                    "количество товара в корзине не должно превышать , количество товара на складе",
                },
                { status: 220 }
              );
            }
          } else if (sizeInCart.size === selectedSizeFromShelter[0].size) {
            if (
              sizeInCart.value + selectedSizes[0].value <=
              selectedSizeFromShelter[0].value
            ) {
              sizeInCart.value += selectedSizes[0].value;

              await cart.save();
              return NextResponse.json(cart);
            } else {
              return NextResponse.json(
                {
                  message:
                    "количество товара в корзине не должно превышать , количество товара на складе",
                },
                { status: 220 }
              );
            }
          }
        } else {
          // Если размера нет в корзине, добавляем новый размер с уникальным _id

          const newSize = { size: sizeFromUser, value: 1 };
          existingItem.sizes.push(newSize);
          await cart.save();
          return NextResponse.json(existingItem);
        }
      }
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const data = await req.json();

    const uId = params.id;
    const pId = data.prodId;

    if (!uId || !pId) {
      return NextResponse.json(
        { message: "You must fill all gaps" },
        { status: 500 }
      );
    }

    const findCartByUid = await Cart.findOne({ userId: uId });

    if (!findCartByUid) {
      return NextResponse.json({ message: "You don't have a cart" });
    } else {
      const itemsInBascet = findCartByUid.items;
      const itemsWithout = itemsInBascet.filter(
        (item: any) => item.prodId !== pId
      );
      findCartByUid.items = itemsWithout;
      await findCartByUid.save();
      return NextResponse.json(findCartByUid);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
