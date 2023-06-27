export type userType = {
  id: string;
  createdAt: string;
  username: string;
  password: string;
  products: productType[];
};

export type productType = {
  id: string;
  createdAt: string;
  name: string;
  belogsToId: string;
  belongsTo: userType;
  updates: updateType[];
};

export type updateType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  status: string;
  version?: string;
  asset?: string;
  productId: string;
  product: productType;
  updatePoints: updatePointType[];
};

export type updatePointType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  updateId: string;
  update: updateType;
};
