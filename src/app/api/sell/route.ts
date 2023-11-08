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
        email: data[0].email,
        title: data[0].title,
        content: data[0].content,
        starting_price: parseInt(data[0].price),
        categoryname: data[0].categoryname,
        images: data[0].images,
        // endDate : new Date().getTime() + 86400000,
        endDate : new Date().getTime() + 180000,
        category: selectedCategory,
        
    }
    const post = await prisma.post.create({
        data: insert,
    })

   // oracle로 요청하는 부분
    let postid = post.id
    let email = data[0].email
    let starting_price = parseInt(data[0].price)
    let transOracle = {
            maxPrice: starting_price,
            // maxEmail : "default",
            currentPrice: starting_price,
            postId:postid,
            sellerEmail: email,
    }
    const orcleResult = await fetch("http://localhost:8080/transaction/post", { 
          method: "POST",
          body: JSON.stringify(transOracle),
          headers: {
              "Content-Type": "application/json",
          }
    })
    console.log(orcleResult.status)
    console.log("__________________________________________________________")
    return NextResponse.json({message: "OK" },{status:orcleResult.status});
  }

