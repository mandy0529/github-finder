import React from 'react';
import {Link} from 'react-router-dom';
import {Error} from '.';
import {useGlobalContext} from '../context/AppContext';
import CardUser from '../styles/userCard';

function UserCard() {
  const {user, handleClear} = useGlobalContext();

  if (user.length === Number(0)) {
    return <Error />;
  }

  return (
    <CardUser>
      <button className="view" onClick={handleClear}>
        CLEAR
      </button>
      <div className="users">
        {user &&
          user.map((item) => {
            const {avatar, login, id} = item;
            return (
              <Link to={`/${login}`} key={id} className="user__list">
                <img src={avatar} alt={login} />
                <div className="user__list-info">
                  <div>{login}</div>
                  <button>view profile</button>
                </div>
              </Link>
            );
          })}
      </div>
    </CardUser>
  );
}

export default UserCard;
