import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API_ENDPOINT} from '../utils/api';
import {minjiObject} from './minji';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);
  const [repo, setRepo] = useState('');
  const [singleUser, setSingleUser] = useState('');

  const searchUser = async (user) => {
    setLoading(true);

    try {
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
    } catch {
      throw new Error('there is not search data matched.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleUserRepo = async (id) => {
    setLoading(true);
    try {
      const {data} = await axios(`${API_ENDPOINT}/users/${id}/repos`);
      setRepo(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleUser = async (id) => {
    setLoading(true);
    try {
      const {data} = await axios(`${API_ENDPOINT}/users/${id}`);
      setSingleUser(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    searchUser('mandy0529');
  };

  // const controlError = (show = false, msg = '') => {
  //   setError({show, msg});
  // };

  useEffect(() => {
    searchUser('mandy0529');
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchUser,
        setUser,
        user,
        loading,
        handleClear,
        fetchSingleUserRepo,
        fetchSingleUser,
        singleUser,
        repo,
        error,
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
