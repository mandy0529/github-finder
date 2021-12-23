import React from 'react';
import {useGlobalContext} from '../context/AppContext';
import {Wrapper} from '../styles/search';

function Search() {
  const {searchUser, setUser, user} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchUser(user);
      setUser('');
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder="Search User" />
      <input type="submit" value="search" />
    </Wrapper>
  );
}

export default Search;
