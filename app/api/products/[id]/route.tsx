import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
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
    const findById = await Product.findOne({ _id: id });
    return NextResponse.json(findById);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
