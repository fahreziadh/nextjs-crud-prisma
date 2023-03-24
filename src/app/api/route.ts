import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

    return NextResponse.json({ message: "Hello World"})
}