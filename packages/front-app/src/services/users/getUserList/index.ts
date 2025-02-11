import { handleFailed, userListHandleSucceed, path } from "..";
import type { UserCollection } from "@/app/lib/class/userCollection";

export const getUserList = async(): Promise<UserCollection> => {
  return fetch(path(`/api/users`), {cache: "no-cache"})
          .then(userListHandleSucceed)
          .catch(handleFailed);
}