export interface BaseRepository<T, X, Y> {
  createOne?: CreateOne<T, X>;
  readAll?: ReadAll<T>;
  updateOne?: UpdateOne<T, Y>;
  deleteOne?: DeleteOne<T>;
};

type RowDataUid = number | string;
type CreateOne<T, P> = (input: P) => Promise<T>;
type ReadAll<T> = () => Promise<T[]>;
type UpdateOne<T, P> = (id: RowDataUid, input: P) => Promise<T>;
type DeleteOne<T> = (id: RowDataUid) => Promise<T>;