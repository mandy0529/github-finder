import React from 'react';
import styled from 'styled-components';

function Error({msg}) {
  console.log(msg, 'error msg');
  return (
    <Wrapper>
      <h1>{msg}</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: var(--main-black2);
`;
export default Error;
