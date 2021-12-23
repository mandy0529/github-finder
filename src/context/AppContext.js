import React, {useContext, useState} from 'react';
import axios from 'axios';
import {API_ENDPOINT} from '../utils/api';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState({show: false, msg: ''});
  const [repo, setRepo] = useState('');

  const searchUser = async (user) => {
    setLoading(true);
    try {
      if (user !== '') {
        const {
          data: {items},
        } = await axios(`${API_ENDPOINT}/search/users?q=${user}`);
        if (items) {
          const userInfo = items.map((item) => {
            const {login, id, avatar_url: avatar} = item;
            return {login, avatar, id};
          });
          setUser(userInfo);
        }
      }
    } catch {
      controlError(true, 'There is no user that matched.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleUser = async (id) => {
    try {
      const {data} = await axios(`${API_ENDPOINT}/users/${id}/repos`);
      setRepo(data);
    } catch (error) {
      controlError(true, 'not found any user info');
    }
  };

  const handleClear = () => {
    setUser('');
  };

  const controlError = (show = false, msg = '') => {
    setError({show, msg});
  };

  return (
    <AppContext.Provider
      value={{
        searchUser,
        setUser,
        user,
        loading,
        error,
        handleClear,
        fetchSingleUser,
        repo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
