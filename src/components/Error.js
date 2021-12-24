import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <Wrapper>
      <h1>There is no user that matched.</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  text-align: center;
`;
export default Error;
