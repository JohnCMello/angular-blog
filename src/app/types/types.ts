export type Post = {
  id: string;
  title: string;
  body: string;
};

export type Posts = Post[];

export type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
  createdAt: Date;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type PostAndAuthor = {
  userId: string;
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  author: Author;
};
