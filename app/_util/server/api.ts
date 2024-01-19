import { NextResponse } from "next/server";

type ApiStatus = "success" | "failed";

interface ApiResponse<T> {
  status: ApiStatus;
  statusCode: number;
  message: string;
  data: T;
}

export const response: ApiResponse<any> = {
  status: "failed",
  statusCode: 500,
  message: "server error",
  data: undefined,
};

export const apiResponse = <T>(r: ApiResponse<T>) => {
  return NextResponse.json(r.message, { status: r.statusCode });
};
