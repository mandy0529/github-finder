import React from 'react';
import styled from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <div className="loader"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: var(--main-black2);

  img {
    width: 100px;
    height: 100px;
  }
  .loader {
    border: 10px solid white;
    border-top: 10px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
