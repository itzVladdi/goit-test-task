import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/usersOperations';
import { UsersCards } from 'components/UsersCards/UsersCards';

export function UsersList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  function handleLoadMore(page) {
    dispatch(fetchUsers(page));
    setPage(page + 1);
    console.log(page);
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ul>
        <UsersCards />
      </ul>
      <button onClick={() => handleLoadMore(page)}>Load More</button>
    </>
  );
}
