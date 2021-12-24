import styled from 'styled-components';

const CardUser = styled.div`
  text-align: center;
  max-width: 100vw;

  .users {
    margin: 2rem 5rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .user__list {
    box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.75);
    margin: 2rem 3rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(0.98);
      opacity: 0.5;
    }
  }
  .user__list-info {
    margin-left: 2rem;

    div {
      font-size: 1.3rem;
    }
    button {
      outline: none;
      border: none;
      background: transparent;
      color: gray;
    }
  }
  .view {
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
  @media screen and (max-width: 768px) {
    .users {
      margin: 0;
      grid-template-columns: auto;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .view {
      font-size: 0.8rem;
    }
    .user__list {
      margin: 0.7rem 2rem;
      padding: 1rem 1rem;
    }
  }
`;

export default CardUser;
