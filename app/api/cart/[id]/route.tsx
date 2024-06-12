import { NextRequest, NextResponse } from "next/server";
import ConnectDataBase from "@/app/lib/ConnectDb";
import Cart from "@/app/models/Cart";
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

// export async function POST(req: Request, { params }: Params) {
//   try {
//     await ConnectDataBase();
//     const { userId, items } = await req.json();

//     if (!userId || !items) {
//       return NextResponse.json(
//         { message: "You must fill all gaps" },
//         { status: 500 }
//       );
//     }

//     let cart = await Cart.findOne({ userId: userId });
//     if (!cart) {
//       cart = new Cart({
//         userId,
//         items: [newCartItem],
//       });
//     } else {
//       cart.items.push(newCartItem);
//     }

//     return NextResponse.json(userId);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }
