import { NextResponse } from "next/server";
import { ResponseData } from "@/lib/interfaces";
import { userServices } from "@/services/user.service";
import { User } from "@prisma/client";

// GET ALL USERS
export async function GET(): Promise<NextResponse> {
  try {
    const users: User[] = await userServices.getAllUsers();
    if (!users || users.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No users found',
      }, { status: 404 });
    };

    return NextResponse.json<ResponseData>({
      success: true,
      message: 'All users retrieved successfully',
      data: users
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error
    }, { status: 500 });
  };
};