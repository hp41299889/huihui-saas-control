import { Prisma } from "@prisma/client";

import { prisma } from "../prisma/prisma";
import { errorHandler } from "../error";

export const createAccount = async (p: Prisma.AccountCreateInput) => {
  try {
    return await prisma.account.create({ data: p });
  } catch (error) {
    throw errorHandler("create account failed", error);
  }
};

export const readAccount = async () => {
  try {
    return await prisma.account.findMany();
  } catch (error) {
    throw errorHandler("read account failed", error);
  }
};
