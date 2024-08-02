"use server";

import { NextResponse } from "next/server";
import { ResponseData } from "@/lib/interfaces";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json<ResponseData>({
    success: true,
    message: 'Hello world!'
  }, { status: 200 });
};