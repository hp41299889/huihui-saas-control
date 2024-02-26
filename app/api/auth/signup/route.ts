import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

import { apiResponse, response } from "@/util/server/api";
import { createAccount } from "@/util/server/model/account";

export const POST = async (req: NextRequest) => {
  const r = { ...response };
  const payload: Prisma.AccountCreateInput = await req.json();
  try {
    const account = await createAccount(payload);
    r.status = {
      type: "success",
      code: 201,
    };
    r.resbonse = {
      message: "OK",
      data: account,
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
