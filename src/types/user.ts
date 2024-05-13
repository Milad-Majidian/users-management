import { z } from "zod";

export const schemaValidator = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 letters" }),
  job: z.string().min(2, { message: "Job must be at least 2 letters" }),
});

export type User = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

// export type editUser = User & {
//   job: string;
// };
export type editUser = {
  name: string;
  job: string;
};
