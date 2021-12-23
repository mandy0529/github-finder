import styled from 'styled-components';

const SingleWrapper = styled.div`
  margin: 7rem 0rem 2rem 5rem;
  button {
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
`;

export default SingleWrapper;
