import { Prisma } from "@prisma/client";

import { prisma } from "../prisma/prisma";
import { errorHandler } from "../error";

export const createService = async (payload: Prisma.ServiceCreateInput) => {
  try {
    return await prisma.service.create({
      data: payload,
    });
  } catch (error) {
    throw errorHandler("create service failed", error);
  }
};

export const readService = async () => {
  try {
    return await prisma.service.findMany();
  } catch (error) {
    throw errorHandler("read service failed", error);
  }
};

export const updateService = async (
  id: number,
  payload: Prisma.ServiceUpdateInput
) => {
  try {
    return await prisma.service.update({
      where: { id },
      data: payload,
    });
  } catch (error) {
    throw errorHandler("update service failed", error);
  }
};

export const deleteService = async (id: number) => {
  try {
    return await prisma.service.delete({
      where: { id },
    });
  } catch (error) {
    throw errorHandler("delete service failed", error);
  }
};
