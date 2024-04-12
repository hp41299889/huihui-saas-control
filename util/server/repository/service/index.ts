import { prisma } from "@/util/server/prisma";
import type { CreateOneInput } from "./interface";

const { service } = prisma;

const 

const createOne = async (s: CreateOneInput) => {
  try {
    return await service.create({ data: s });
  } catch (error) {
    throw error;
  };
};

const readAll =  async () => {
  try {
    return await service.findMany();
  } catch (error) {
    throw error;
  };
};