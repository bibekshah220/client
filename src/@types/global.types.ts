export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}

export type IResponse = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type IImage = {
  public_id: string;
  path: string;
};
