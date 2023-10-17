import { NextResponse , NextRequest } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest, context: { params: any }) {
    let id = context.params.id
    try{
    const result = await prisma.post.findUnique({where:{id:id}});
        return NextResponse.json(result);
    }catch(err)
    {   
        return NextResponse.json({status:500});
    }
}
export async function POST(req:NextRequest) {

    return new Response("OK")
}
export async function PUT()
{
    return null;
}
export async function DELETE()
{
    return null;
}