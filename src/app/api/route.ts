"use server";

import { ResponseData } from "@/lib/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log(req.headers);
  
  return NextResponse.json<ResponseData>({
    success: true,
    message: 'Hello world!'
  }, { status: 200 });
};