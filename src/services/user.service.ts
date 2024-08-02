import { PrismaClient, User } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

class UserService {
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  };

  async getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email
      }
    });
  };

  async createNewUser(payload: User): Promise<User> {
    return prisma.user.create({
      data: {
        ...payload,
        id: nanoid(16)
      }
    });
  };
};

export const userServices = new UserService();