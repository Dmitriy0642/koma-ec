import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Subcategory from "@/app/models/Subcategory";

export async function GET(req: Request) {
  try {
    await ConnectDataBase();
    const find = await Subcategory.find();
    if (find.length === 0) {
      return NextResponse.json({ message: "There aren't subcategories" });
    }
    return NextResponse.json(find);
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
        { message: "You must fill all gaps" },
        { status: 500 }
      );
    }

    const findByName = await Subcategory.findOne({ name: name });
    if (findByName === null) {
      const create = await Subcategory.create({ name: name });
      return NextResponse.json(create, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "That name already created" },
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
