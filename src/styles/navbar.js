import styled from 'styled-components';

const Wrapper = styled.nav`
  font-family: 'Ubuntu Mono', monospace;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--main-black1);
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;

  h2 {
    margin: 0 1.5rem;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    img {
      width: 30px;
    }
    h2 {
      font-size: 0.9rem;
    }
  }
`;
export {Wrapper};
