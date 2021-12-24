import styled from 'styled-components';

const SingleWrapper = styled.div`
  margin: 7rem 0rem 2rem 5rem;
  h1 {
    font-weight: bold;
  }
  .back-btn {
    margin: 0 auto;
    color: tomato;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 2px solid tomato;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: tomato;
      color: white;
      transform: scale(0.98);
    }
  }
  .name {
    font-size: 2.8rem;
    font-weight: bold;
  }
  .type {
    font-size: 1.2rem;
    color: lightgreen;
    padding: 0.2rem 1.5rem;
    border-radius: 30px;
    background: var(--main-black3);
    margin-left: 1rem;
  }
  .to-github {
    button {
      margin: 2rem 1rem 2rem 0;
      cursor: pointer;
      padding: 0.7rem 1.5rem;
      border-radius: 10px;
      border: 2px solid white;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: var(--main-black3);
        transform: scale(0.98);
      }
    }
  }
  .single__user {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    img {
      width: 400px;
      border-radius: 10px;
    }
  }
  .single__user-info {
    margin-left: 3rem;
    border-radius: 5px;
  }
  .user__list {
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem 2rem 1rem 1rem;
    box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    .user__list-each {
      padding: 0 2rem;
      &:not(:last-child) {
        border-right: 1px solid white;
      }
      div {
        font-size: 1rem;
      }
      h4 {
        font-weight: bold;
      }
    }
  }
  .second {
    margin: 6rem auto 3rem auto;
    max-width: 80vw;
    text-align: center;
    svg {
      font-size: 2.7rem;
      color: tomato;
      margin: 0 2rem;
    }
    h4 {
      font-size: 2rem;
    }
  }
  .second-each {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    margin: 5rem 0rem 2rem 2rem;
    max-width: 100vw;
    .back-btn {
      font-size: 0.8rem;
      padding: 0.3rem 1rem;
    }
    .name {
      font-size: 1.7rem;
    }
    .type {
      font-size: 0.7rem;
    }
    .to-github {
      button {
        margin: 0.7rem 0.4rem 0.7rem 0;
        padding: 0.3rem 0.8rem;
        font-size: 0.8rem;
      }
    }
    .single__user {
      flex-direction: column;
      img {
        width: 150px;
        margin: 1rem auto 2rem auto;
      }
    }
    .single__user-info {
      margin-left: 0;
    }
    .user__list {
      flex-direction: column;
      justify-content: center;
      width: 80vw;

      .user__list-each {
        &:not(:last-child) {
          border-right: none;
        }
        margin-top: 0.4rem;

        div {
          font-size: 0.6rem;
          margin-bottom: 0.3rem;
        }
        h4 {
          font-size: 0.9rem;
        }
      }
    }
    .second {
      margin: 0;
    }
    .second-each {
      margin-top: 0.7rem;
      div {
        margin-bottom: 0.3rem;
      }
    }
  }
`;

export default SingleWrapper;
