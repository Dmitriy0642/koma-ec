import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Brands from "@/app/models/Brands";

export async function GET() {
  try {
    await ConnectDataBase();

    const findEntities = await Brands.find();
    if (findEntities.length > 0) {
      return NextResponse.json(findEntities, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Brands aren't exist" },
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

export async function POST(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    const name = data.name;

    const findOne = await Brands.findOne({ name: name });
    if (findOne === null) {
      const create = await Brands.create({ name: name });
      return NextResponse.json(create, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "That brands already created" },
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
