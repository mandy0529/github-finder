import styled from 'styled-components';

const RepoWrapper = styled.div`
  max-width: 80vw;
  padding: 5rem 4rem;
  margin: 6rem auto 3rem auto;
  border-radius: 5px;
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
  .repo-list {
    padding: 2rem;
    margin: 2rem 0rem;
    border-radius: 5px;
    background: var(--main-black1);
  }
  h3 {
    font-weight: bold;
    svg {
      font-size: 1.9rem;
      margin: 0 0.5rem;
    }
  }
  p {
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }
  .repo-list__issue {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    svg {
      font-size: 1.9rem;
      margin-right: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      margin-left: 2rem;
      padding: 0.5rem 1.5rem;
      border-radius: 30px;
      background: var(--main-black2);
      &:nth-child(1) {
        color: skyblue;
      }
      &:nth-child(2) {
        color: lightgreen;
      }
      &:nth-child(3) {
        color: tomato;
      }
      &:nth-child(4) {
        color: gold;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 6rem auto 2rem auto;
    max-width: 100vw;
    .repo-list {
      padding: 1rem;
      margin: 1rem 0rem;
    }
    h1 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 0.5rem;

      svg {
        font-size: 1.3rem;
        margin: 0 0.5rem;
      }
    }
    p {
      font-size: 0.3rem;
      letter-spacing: 0.1rem;
    }
    .repo-list__issue {
      /* flex-direction: column; */

      svg {
        font-size: 0.8rem;
        margin: 0 0.2rem;
      }
      div {
        font-size: 0.7rem;
        margin: 0.2rem auto;
        padding: 0.2rem 0.7rem;
        margin-left: 0.5rem;
      }
    }
  }
`;

export {RepoWrapper};
