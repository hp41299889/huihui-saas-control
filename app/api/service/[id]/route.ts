import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";

import { response, apiResponse } from "@/util/server/api";
import { deleteService, updateService } from "@/util/server/model";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const r = { ...response };
  const { id } = params;
  const payload: Prisma.ServiceUpdateInput = await req.json();
  try {
    const result = await updateService(id, payload);
    r.status = {
      type: "success",
      code: 200,
    };
    r.resbonse = {
      message: "update service success",
      data: result,
    };
  } catch (error) {
    r.status = {
      type: "failed",
      code: 400,
    };
    r.resbonse = {
      message: error as string,
      data: undefined,
    };
  }
  return apiResponse(r);
};

export const DELETE = async (
  _: NextRequest,
  { params }: { params: { id: number } }
) => {
  const r = { ...response };
  const { id } = params;
  try {
    const result = await deleteService(id);
    r.status = {
      type: "success",
      code: 200,
    };
    r.resbonse = {
      message: "delete service success",
      data: result,
    };
  } catch (error) {
    r.status = {
      type: "failed",
      code: 400,
    };
    r.resbonse = {
      message: error as string,
      data: undefined,
    };
  }
  return apiResponse(r);
};
