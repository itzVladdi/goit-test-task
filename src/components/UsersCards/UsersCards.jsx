import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';

export function UsersCards() {
  const users = useSelector(selectUsers);
  return (
    <>
      {users?.map(user => {
        return (
          <li key={user.id}>
            <p>{user.name}</p>
          </li>
        );
      })}
    </>
  );
}
