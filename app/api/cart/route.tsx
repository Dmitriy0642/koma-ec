import ConnectDataBase from "@/app/lib/ConnectDb";
import Cart from "@/app/models/Cart";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    await ConnectDataBase();
    const cokieStore = cookies();
    const userId = cokieStore.get("userId");
    if (userId) {
      const findUserCart = await Cart.findOne({ userId: userId.value });
      return NextResponse.json(findUserCart);
    } else {
      return NextResponse.json({ message: "Cart doesn't exist" });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Someting went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    const selectedSizeFromShelter = data.selectedSizeFromShelter;
    const cokieStore = cookies();
    const userId = cokieStore.get("userId");
    const selectedProduct = data.items[0];
    const prodId = selectedProduct.prodId;
    const selectedSizes = selectedProduct.sizes;

    const findProductInShelter = await Product.findById(prodId);

    if (!userId?.value) {
      return NextResponse.json({ message: "User doesn't exist" });
    }

    let cart = await Cart.findOne({ userId: userId?.value });

    if (!findProductInShelter) {
      return NextResponse.json(
        { message: "That product doesn't exist" },
        { status: 500 }
      );
    }

    if (!cart) {
      // Создаем новую корзину, если её нет
      cart = new Cart({
        userId: userId.value,
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

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const cokiesStore = cookies();
    const uId = cokiesStore.get("userId")?.value;
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

export async function PATCH(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    const prodId = data.prodId;
    const size = data.size;
    const action = data.action;
    const cokiesStore = cookies();
    const uId = cokiesStore.get("userId")?.value;

    if (!uId) {
      return NextResponse.json({ message: "User doesn't exist" });
    }

    const findProductInShelter = await Product.findOne({ _id: prodId });
    const findProductInCart = await Cart.findOne({ userId: uId });

    if (!findProductInShelter || !findProductInCart) {
      return NextResponse.json(
        { message: "Данного продукта не существует" },
        { status: 500 }
      );
    } else {
      const sizesInShelter = findProductInShelter.sizes;
      const productsInCart = findProductInCart.items;

      const exactlyProductInCart = productsInCart.find(
        (item: { prodId: string }) => item.prodId === prodId
      );
      const sizesInCart = exactlyProductInCart.sizes;
      const selectedSizeInCart = sizesInCart.find(
        (item: { size: string; value: number }) => item.size === size
      );
      const selectedSizeShelter = sizesInShelter.find(
        (item: { size: string; value: number }) => item.size === size
      );

      if (selectedSizeInCart && selectedSizeShelter) {
        if (action === "increment") {
          if (selectedSizeInCart.value < selectedSizeShelter.value) {
            selectedSizeInCart.value += 1;
          } else {
            return NextResponse.json(
              {
                message:
                  "Вы не можете добавить товара больше чем , есть на складе",
              },
              { status: 230 }
            );
          }
        } else if (action === "decrement") {
          if (selectedSizeInCart.value > 0) {
            selectedSizeInCart.value -= 1;
          } else {
            return NextResponse.json(
              {
                message:
                  "Количество товара не может быть в отрицательном количестве",
              },
              { status: 220 }
            );
          }
        }

        await findProductInCart.save();
        return NextResponse.json(findProductInCart);
      } else {
        return NextResponse.json(
          { message: "Размер не найден" },
          { status: 404 }
        );
      }
    }
  } catch (error) {
    console.error("Error:", error); // Логирование ошибки
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
