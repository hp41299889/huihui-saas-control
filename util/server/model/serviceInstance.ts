import { Prisma } from "@prisma/client";

import { prisma } from "../prisma/prisma";
import { errorHandler } from "../error";

const { serviceInstance } = prisma;

export const createServiceInstance = async (
  serviceId: number,
  p: Prisma.ServiceInstanceUncheckedCreateInput
) => {
  try {
    return serviceInstance.create({
      data: p,
    });
  } catch (error) {
    throw errorHandler("create serviceInstance failed", error);
  }
};

export const readServiceInstance = async () => {
  try {
    return serviceInstance.findMany();
  } catch (error) {
    throw errorHandler("read serviceInstance failed", error);
  }
};
