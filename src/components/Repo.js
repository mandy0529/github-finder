import React from 'react';
import {RepoWrapper} from '../styles/repo';
import {
  BiLink,
  AiOutlineStar,
  GoIssueOpened,
  CgGitFork,
  SiDarkreader,
} from '../utils/icons';

function Repo({repo}) {
  return (
    <RepoWrapper>
      <h1>Latest Respositories</h1>
      <div className="repo">
        {repo &&
          repo.map((item) => {
            const {
              id,
              name,
              description,
              watchers_count,
              stargazers_count,
              forks_count,
              open_issues_count,
            } = item;
            return (
              <div key={id} className="repo-list">
                <h3>
                  <BiLink />
                  {name}
                </h3>
                <p>{description}</p>
                <div className="repo-list__issue">
                  <div>
                    <SiDarkreader />
                    {watchers_count}
                  </div>

                  <div>
                    <AiOutlineStar />
                    {stargazers_count}
                  </div>

                  <div>
                    <GoIssueOpened />
                    {open_issues_count}
                  </div>

                  <div>
                    <CgGitFork />
                    {forks_count}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </RepoWrapper>
  );
}

export default Repo;
