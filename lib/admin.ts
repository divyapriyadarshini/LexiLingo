import { auth } from "@clerk/nextjs/server";


const adminIds= [
   " user_2iJhgcTNV7DJUN2XvEIPjYDVQUG"
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) 
    return false;

  return adminIds.indexOf(userId) !== -1;
};