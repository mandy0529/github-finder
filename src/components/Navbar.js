import React from 'react';
import {Wrapper} from '../styles/navbar';
import {NAVBAR} from '../utils/images';

function Navbar() {
  return (
    <Wrapper>
      <img src={NAVBAR} alt="github-img" />
      <h2>Github Finder</h2>
    </Wrapper>
  );
}

export default Navbar;
