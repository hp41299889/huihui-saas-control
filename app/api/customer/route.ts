import { NextRequest } from "next/server";

import { response, apiResponse } from "@/app/_util/server/api";

interface Post {
  name: string;
}

export const POST = async (req: NextRequest) => {
  const r = { ...response };
  const payload: Post = await req.json();
  return apiResponse(r);
};
