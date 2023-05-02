import { Provider } from 'react-redux';
import { UsersList } from './UsersList/UsersList';
import { store } from 'redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <UsersList />
      </div>
    </Provider>
  );
};
