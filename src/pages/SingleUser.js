import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Loader} from '../components';
import {useGlobalContext} from '../context/AppContext';
import SingleWrapper from '../styles/singleUser';

function SingleUser() {
  const {id} = useParams();
  const {
    fetchSingleUserRepo,
    fetchSingleUser,
    repo,
    singleUser: user,
    loading,
  } = useGlobalContext();

  const {
    avatar_url: avatar,
    html_url: github,
    company,
    followers,
    following,
    location,
    public_repos,
    public_gists,
    blog,
    type,
    login,
  } = user;
  useEffect(() => {
    fetchSingleUserRepo(id);
    fetchSingleUser(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  console.log(user);
  return (
    <SingleWrapper>
      <Link to="/">
        <button className="back-btn">Back to Search</button>
      </Link>
      <div className="single__user">
        <img src={avatar} alt={login} />
        <div className="single__user-info">
          <div>
            <span className="name">{login}</span>
            <span className="type">{type}</span>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="to-github"
            href={github}
          >
            <button>Visit github website</button>
          </a>
          <a target="_blank" rel="noreferrer" className="to-github" href={blog}>
            <button>Visit Blog</button>
          </a>
          <div className="user__list">
            {location && (
              <div className="user__list-each">
                <div>Location</div>
                <h4>{location}</h4>
              </div>
            )}
            {company && (
              <div className="user__list-each">
                <div>Company</div>
                <h4>{company}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </SingleWrapper>
  );
}

export default SingleUser;
