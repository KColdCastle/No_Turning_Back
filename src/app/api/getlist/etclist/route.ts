import { NextResponse , NextRequest } from "next/server";
import prisma from "@/db";


export async function GET(){
    
    const data = await prisma.post.findMany({
        where: { category: { in: ["etc"] } },
      select: {
          id: true,          
          title: true,        
          starting_price: true,
          category: true,       
          images: true,
      },
      orderBy: { create_date: "desc" },
  });      
      
     // BigInt 값을 문자열로 변환
     const serializedData = data.map((item) => ({
        ...item,
        starting_price: item.starting_price.toString(),
        // 다른 BigInt 필드도 필요한 경우 문자열로 변환
    }));

    return NextResponse.json(serializedData);
}

