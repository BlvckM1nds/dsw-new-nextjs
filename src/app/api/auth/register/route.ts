import { type NextRequest, NextResponse } from "next/server";
import { ResponseData } from "@/lib/interfaces";
import { encryptUtils } from "@/utils/encrypt";
import { userServices } from "@/services/user.service";
import { User } from "@prisma/client";

// CREATE NEW USER
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    const { password } = body;
    const hashedPassword = await encryptUtils.hashPassword(password);

    const payload = {
      ...body,
      password: hashedPassword
    };

    await userServices.createNewUser(payload);

    return NextResponse.json<ResponseData>({
      success: true,
      message: 'New user created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error
    }, { status: 500 });
  };
};