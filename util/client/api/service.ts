import { Prisma, Service } from "@prisma/client";
import { nextApi } from "./request";
import { Response } from "@/util/server/api";

export const postService = async (p: Prisma.ServiceCreateInput) => {
  try {
    return await nextApi.post<Response<Service>>("/service", p);
  } catch (error) {
    throw console.error(error);
  }
};

export const getService = async () => {
  try {
    return await nextApi.get<Response<Service[]>>("/service");
  } catch (error) {
    throw console.error(error);
  }
};
