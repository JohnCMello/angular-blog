export type Author = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type SinglePostAndAuthor = {
  userId: string;
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  author: Author;
};
export type PostsAndAuthors = {
  userId: string;
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  author: string | undefined;
};
