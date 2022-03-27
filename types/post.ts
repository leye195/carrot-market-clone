import { Post, User } from "@prisma/client";

export type writePostInputType = {
  question: string;
};

export type writePostMutationType = {
  ok: boolean;
  post: Post;
};

export type postResponseType = {
  ok: boolean;
  posts: (Post & {
    user: User;
    _count: {
      answers: number;
      wonderList: number;
    };
  })[];
};
