// import { NextRequest } from "next/server";
// import { Prisma } from "@prisma/client";

// import { response, apiResponse } from "@/util/server/api";
// import { createCustomer, readCustomer } from "@/util/server/model";

// export const GET = async () => {
//   const r = { ...response };
//   try {
//     const result = await readCustomer();
//     r.status = {
//       type: "success",
//       code: 200,
//     };
//     r.resbonse = {
//       message: "read customer success",
//       data: result,
//     };
//   } catch (error) {
//     r.status = {
//       type: "failed",
//       code: 400,
//     };
//     r.resbonse = {
//       message: error as string,
//       data: undefined,
//     };
//   }
//   return apiResponse(r);
// };

// export const POST = async (req: NextRequest) => {
//   const r = { ...response };
//   const payload: Prisma.CustomerCreateInput = await req.json();
//   try {
//     const result = await createCustomer(payload);
//     r.status = {
//       type: "success",
//       code: 201,
//     };
//     r.resbonse = {
//       message: "create customer success",
//       data: result,
//     };
//   } catch (error) {
//     r.status = {
//       type: "failed",
//       code: 400,
//     };
//     r.resbonse = {
//       message: error as string,
//       data: undefined,
//     };
//   }
//   return apiResponse(r);
// };
