// import { Prisma } from "@prisma/client";

// import { prisma } from "../prisma/prisma";
// import { errorHandler } from "../error";

// export const createCustomer = async (payload: Prisma.CustomerCreateInput) => {
//   try {
//     return await prisma.customer.create({
//       data: payload,
//     });
//   } catch (error) {
//     throw errorHandler("create customer failed", error);
//   }
// };

// export const readCustomer = async () => {
//   try {
//     return await prisma.customer.findMany();
//   } catch (error) {
//     throw errorHandler("read customer failed", error);
//   }
// };

// export const updateCustomer = async (
//   id: number,
//   payload: Prisma.CustomerUpdateInput
// ) => {
//   try {
//     return await prisma.customer.update({
//       where: { id },
//       data: payload,
//     });
//   } catch (error) {
//     throw errorHandler("update customer failed", error);
//   }
// };

// export const deleteCustomer = async (id: number) => {
//   try {
//     return await prisma.customer.delete({
//       where: { id },
//     });
//   } catch (error) {
//     throw errorHandler("delete customer failed", error);
//   }
// };
