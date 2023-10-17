import { NextResponse , NextRequest } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest) {
    const result = await prisma.post.findMany();
    
    return NextResponse.json(result);
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