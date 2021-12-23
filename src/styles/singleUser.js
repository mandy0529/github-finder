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
    img {
      width: 400px;
      border-radius: 10px;
    }
  }
  .single__user-info {
    margin-left: 3rem;
  }
  .user__list {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem 2rem 1rem 1rem;
    box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    .user__list-each {
      padding: 0 2rem;
      &:nth-child(1) {
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
`;

export default SingleWrapper;
