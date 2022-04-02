import { Answer, Post, User } from "@prisma/client";

export type writePostInputType = {
  question: string;
};

export type writeCommentInputType = {
  answer: string;
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

export type postDetailResponseType = {
  ok: boolean;
  post: Post & {
    user: User;
    answers: (Answer & { user: User })[];
    _count: {
      wonderList: number;
    };
  };
  isWondering: boolean;
};
