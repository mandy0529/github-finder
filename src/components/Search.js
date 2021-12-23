import React, {useState} from 'react';
import {Error, Loader} from '.';
import {useGlobalContext} from '../context/AppContext';
import {Wrapper} from '../styles/search';

function Search() {
  const [user, setUser] = useState('');
  const {error, searchUser, loading} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      searchUser(user);
      setUser('');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {error.show && (
        <Error>
          <p>{error.msg}</p>
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search User"
          className="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input className="submit" type="submit" value="Go" />
      </form>
    </Wrapper>
  );
}

export default Search;
