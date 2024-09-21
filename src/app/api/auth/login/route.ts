"use server";

import { encryptUtils } from "@/lib/encrypt";
import { ResponseData } from "@/lib/interfaces";
import { userServices } from "@/services/user.service";
import { User } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

// CREATE NEW USER
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json<ResponseData>({
        success: false,
        message: 'Email or password must be provided'
      }, { status: 400 });
    };

    const existingUser: User | null = await userServices.getUserByEmail(email);
    if (!existingUser) {
      return NextResponse.json<ResponseData>({
        success: false,
        message: 'Email or password invalid'
      }, { status: 400 });
    };

    const isMatch: boolean = await encryptUtils.checkPassword(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json<ResponseData>({
        success: false,
        message: 'Email or password invalid'
      }, { status: 400 });
    };

    return NextResponse.json<ResponseData>({
      success: true,
      message: 'Logged in'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json<ResponseData>({
      success: false,
      message: 'Internal server error',
      error: error
    }, { status: 500 });
  };
};