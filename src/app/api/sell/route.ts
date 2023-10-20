import { NextResponse , NextRequest } from "next/server";
import prisma from "@/db";
import { Category } from "@prisma/client";

export async function POST(req:NextRequest, res: NextResponse) {
  let data = await req.json()

    let selectedCategory;
    if (data[0].category === 'beauty') {
      selectedCategory = Category.beauty;
    } else if (data[0].category === 'hobby') {
      selectedCategory = Category.hobby;
    } else if (data[0].category === 'digital') {
      selectedCategory = Category.digital;
    } else if (data[0].category === 'sport') {
      selectedCategory = Category.sport;
    } else if (data[0].category === 'car') {
      selectedCategory = Category.car;
    } else {
      selectedCategory = Category.etc;
    }
    let insert = {
        email: data[0].email, // 필요없는거 아닌가? 경매 등록할 때
        title: data[0].title,
        content: data[0].content,
        starting_price: parseInt(data[0].price),
        categoryname: data[0].categoryname,
        images: data[0].images,
        category: selectedCategory,
        
        
    }
    const post = await prisma.post.create({
        data: insert,
        
    })
    return new Response("OK")
}
