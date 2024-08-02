import { Category, PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

class MenuService {
  async getCategories(): Promise<Category[]> {
    return prisma.category.findMany({
      orderBy: {
        name: "asc"
      }
    });
  };

  async getMenuWithPrices(): Promise<Category[]> {
    return prisma.category.findMany({
      include: {
        items: {
          include: {
            prices: true
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    });
  };
};

export const menuServices = new MenuService();