import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10rem 0rem 3rem 5rem;
  display: flex;
  input {
    border: none;
    outline: none;
    background: transparent;
    background: var(--main-white1);
    padding: 1.2rem 3rem;
    font-size: 1.5rem;
  }
  .text {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 700px;
  }
  .submit {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: var(--main-black3);
    color: white;
    cursor: pointer;
  }
  .enter-value {
    margin-top: 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 6rem 0 1rem 3rem;
    input {
      font-size: 0.8rem;
      padding: 0.5rem 2rem;
    }
    .text {
      width: 50%;
    }
  }
`;

export {Wrapper};
