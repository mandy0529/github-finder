import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API_ENDPOINT} from '../utils/api';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState(0);
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [error, setError] = useState({show: false, msg: ''});

  const searchUser = async (user) => {
    setLoading(true);
    try {
      const {data} = await axios(`${API_ENDPOINT}/users`);
      if (data) {
        const {avatar_url, login, repos_url} = data;
        const {data: reposData} = await axios(`${repos_url}?per_page=30`);
        const userData = {avatar_url, login};
        setUser(userData);
        setRepo(reposData);
      }
    } catch {
      controlError(true, 'There is no user that matched');
    } finally {
      checkRequest();
      setLoading(false);
    }
  };

  const checkRequest = async () => {
    try {
      const {
        data: {
          rate: {remaining},
        },
      } = await axios(`${API_ENDPOINT}/rate_limit`);
      setRequest(remaining);
      if (remaining === 0) {
        controlError(true, 'sorry, you have exeeded hourly limit rate');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const controlError = (show = false, msg = '') => {
    setError({show, msg});
  };

  useEffect(() => {
    checkRequest();
    searchUser();
  }, []);

  return (
    <AppContext.Provider value={{searchUser, setUser, user}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
