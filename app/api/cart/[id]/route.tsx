import { NextRequest, NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Cart from "@/app/models/Cart";
import Product from "@/app/models/Product";
interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  try {
    await ConnectDataBase();
    const id = params.id;
    const findByUserId = await Cart.findOne({ _id: id });
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
    const userId = data.userId;
    const newItem = data.items[0];
    const product = await Product.findById(newItem.prodId);
    let sizeInShelter;
    let selectedSizeFromClient;

    if (!product) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    } else {
      sizeInShelter = product.sizes[0];
      selectedSizeFromClient = newItem.sizes;
    }
    // console.log(selectedSizeFromClient);
    // console.log(sizeInShelter);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
