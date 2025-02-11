// import Link from 'next/link';
import { getUserList } from '@/services/users/getUserList';
import { UserCollection } from '@/app/lib/class/userCollection';
import { User } from '@/app/lib/class/user';

export const UserList = async() => {
  const userCollection:UserCollection = await getUserList();
  return (
    <>
      <table>
        <tbody>
          { userCollection.getUserList != undefined &&
              userCollection.getUserList.length > 0 &&
              userCollection.getUserList.map((user:User) => (
                <tr key={user.getId}>
                  <td>{user.getName}</td>
                  <td>{user.getEmail}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </>
  )
}