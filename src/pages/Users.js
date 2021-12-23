import React from 'react';
import UserCard from '../components/UserCard';
import {useGlobalContext} from '../context/AppContext';

function Users() {
  const {user} = useGlobalContext();
  return (
    <div>
      {user && (
        <>
          <UserCard />
        </>
      )}
    </div>
  );
}

export default Users;
