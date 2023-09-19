export type Post = {
  id: number;
  createdAt: Date,
  username: string;
  title: string;
  body: string;
}

export type ApplicationError = {
  name: string;
  message: string;
};