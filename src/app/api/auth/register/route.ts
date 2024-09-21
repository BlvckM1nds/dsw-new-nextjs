"use server";

import { encryptUtils } from "@/lib/encrypt";
import { ResponseData } from "@/lib/interfaces";
import { userServices } from "@/services/user.service";
import { User } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

// CREATE NEW USER
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    const { password } = body;
    const hashedPassword = await encryptUtils.hashPassword(password);

    const payload = {
      ...body,
      password: hashedPassword
    };

    const user: User = await userServices.createNewUser(payload);

    return NextResponse.json<ResponseData>({
      success: true,
      message: 'New user created successfully',
      data: user
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json<ResponseData>({
      success: false,
      message: 'Internal server error',
      error: error
    }, { status: 500 });
  };
};