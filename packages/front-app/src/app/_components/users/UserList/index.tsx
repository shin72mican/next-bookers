// import Link from 'next/link';
import { getUserList } from '@/services/users/getUserList';
// import { UserCollection } from '@/app/lib/class/userCollection';
// import { User } from '@/app/lib/class/user';
import { UserType } from '@/app/lib/type';

export const UserList = async() => {
  // const userCollection = new UserCollection();
  // const userList:Omit<UserType, 'book'>[] = await getUserList();
  // userCollection.setUserList = userList;
  const userList:UserType[] = await getUserList();
  return (
    <>
      <table>
        <tbody>
          {/* { userCollection.getUserList != undefined &&
              userCollection.getUserList.length > 0 &&
              userCollection.getUserList.map((user:User) => (
                <tr key={user.getId}>
                  <td>{user.getName}</td>
                  <td>{user.getEmail}</td>
                </tr>
              ))
          } */}

          { userList != undefined
            && userList.length > 0 
            && userList.map((user) => (
              <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}