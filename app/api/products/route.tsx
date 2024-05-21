import { NextResponse } from "next/server";
import Product from "@/app/models/Product";
import ConnectDataBase from "@/app/lib/ConnectDb";

export async function POST(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    if (!data.name || !data.sizes || !data.image) {
      return NextResponse.json(
        { message: "You need fell all gaps" },
        { status: 500 }
      );
    }
    const findOne = await Product.findOne({ name: data.name });
    if (findOne !== null) {
      return NextResponse.json(
        { message: "product already exist" },
        { status: 500 }
      );
    } else {
      const createProduct = await Product.create({
        name: data.name,
        color: data.color,
        sizes: data.sizes,
        firm: data.firm,
        price: data.price,
        status: data.status,
        image: data.image,
      });
      return NextResponse.json(createProduct);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ConnectDataBase();
    const findProducts = await Product.find();
    return NextResponse.json(findProducts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
