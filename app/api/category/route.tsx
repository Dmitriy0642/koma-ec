import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Category from "@/app/models/Category";

export async function GET(req: Request) {
  try {
    await ConnectDataBase();
    const category = await Category.find();
    if (category.length === 0) {
      return NextResponse.json({ message: "There aren't categories" });
    }
    return NextResponse.json(category, { status: 200 });
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
    const name = data.name;
    if (!name) {
      return NextResponse.json(
        { message: "You must fill all required gaps" },
        { status: 500 }
      );
    }
    const findName = await Category.findOne({ name: name });
    if (findName === null) {
      const createCategory = await Category.create({ name: name });
      return NextResponse.json(createCategory, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "category already created" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
