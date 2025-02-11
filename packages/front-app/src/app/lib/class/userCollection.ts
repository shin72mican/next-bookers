import { User } from '@/app/lib/class/user';
import { UserType } from '@/app/lib/type';

export class UserCollection {
  private userList: User[]|undefined;

  public set setUserList(userList:User[]|UserType[]|undefined) {
    if (userList !== undefined) {
      this.userList = userList.map(user => {
        if (user instanceof User) {
          return user;
        } else {
          return new User(user);
        }
      });
    } else {
      this.userList = undefined;
    }
  }

  public get getUserList():User[]|undefined {
    return this.userList;
  }
}