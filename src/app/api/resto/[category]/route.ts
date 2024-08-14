"use server";

import { type NextRequest, NextResponse } from "next/server";
import { ResponseData } from "@/lib/interfaces";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams;

    return NextResponse.json<ResponseData>({
      success: true,
      message: 'test',
      data: searchParams
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json<ResponseData>({
      success: false,
      message: 'Internal server error',
      error: error
    }, { status: 500 });
  };
};