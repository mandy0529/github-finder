import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useGlobalContext} from '../context/AppContext';
import SingleWrapper from '../styles/singleUser';

function SingleUser() {
  const {id} = useParams();
  const {fetchSingleUser, repo} = useGlobalContext();
  const user = repo && repo[0].owner;

  useEffect(() => {
    fetchSingleUser(id);
  }, [id]);

  console.log(repo, 'repo');
  return (
    <SingleWrapper>
      <button>Back to Search</button>
    </SingleWrapper>
  );
}

export default SingleUser;
