import { Prisma, Service } from "@prisma/client";

import type { BaseRepository } from "../interface";

export interface ServiceRepository<X, Y> extends BaseRepository<Service, X, Y> {
  createOne: CreateOne<X>;
  
}

export type CreateOne<P> = (s: P) => Promise<Service>;
export type CreateOneInput = Prisma.ServiceCreateInput;