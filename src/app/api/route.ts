"use server";

import { NextRequest, NextResponse } from "next/server";
import { ResponseData } from "@/lib/interfaces";

export function GET(request: NextRequest): NextResponse {
  console.log(request);
  
  return NextResponse.json<ResponseData>({
    success: true,
    message: 'Hello world!'
  }, { status: 200 });
};