// src/data/users.ts
export type User = {
  username: string;
  password: string;
};

export const users = {
  standard: {
    username: process.env.STANDARD_USER!,
    password: process.env.STANDARD_PASSWORD!,
  },
  invalid: {
    username: process.env.INVALID_USER!,
    password: process.env.INVALID_PASSWORD!,
  },
};
