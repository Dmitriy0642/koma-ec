import { NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Firms from "@/app/models/Firm";

export async function POST(req: Request) {
  try {
    await ConnectDataBase();
    const data = await req.json();
    if (!data.name || !data.href) {
      return NextResponse.json(
        { message: "You must fill all gaps " },
        { status: 500 }
      );
    }
    const findLink = await Firms.findOne({ name: data.name });

    if (findLink === null) {
      const createLink = await Firms.create({
        name: data.name,
        href: data.href,
      });
      return NextResponse.json(createLink, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "That link already created" },
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

export async function GET() {
  try {
    await ConnectDataBase();
    const getAll = await Firms.find();
    return NextResponse.json(getAll, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
