import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Links from "@/app/models/Links";

export async function GET() {
  try {
    await ConnectDataBase();
    const getAllLinks = await Links.find();
    if (getAllLinks.length === 0) {
      return NextResponse.json(
        { message: "There aren't links " },
        { status: 500 }
      );
    } else {
      return NextResponse.json(getAllLinks);
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
    const href = data.href;
    if (!name || !href) {
      return NextResponse.json(
        { message: "You must fill all gaps" },
        { status: 500 }
      );
    }
    const findByName = await Links.findOne({ name: name });

    if (findByName) {
      return NextResponse.json(
        { message: "That link already exist" },
        { status: 500 }
      );
    } else {
      const create = await Links.create({ name: name, href: href });
      return NextResponse.json(create);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
