import { PrismaClient, User } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

class UserService {
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
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
        id: 'UDS-' + nanoid(8)
      }
    });
  };
};

export const userServices = new UserService();