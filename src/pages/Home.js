import React from 'react';
import {Search, Error} from '../components/index';
import {useGlobalContext} from '../context/AppContext';
import Users from './Users';

function Home() {
  const {user} = useGlobalContext();
  return (
    <>
      <Search />
      {user ? <Users /> : <Error />}
    </>
  );
}

export default Home;
