import { handleFailed, userListHandleSucceed, path } from "..";
// import type { UserCollection } from "@/app/lib/class/userCollection";
import type { UserType } from '@/app/lib/type';

export const getUserList = async(): Promise<Omit<UserType, 'books'>[]> => {
  return fetch(path(`/api/users`), {cache: "no-cache"})
          .then(userListHandleSucceed)
          .catch(handleFailed);
}