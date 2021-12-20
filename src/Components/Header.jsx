import React from 'react';
import { useContext } from 'react/cjs/react.development';
import ContextMusicsOn from '../ContextApi/ContextMusicsOn';

function Header() {
  const { userName } = useContext(ContextMusicsOn);
  console.log(userName);

  return (
    <h2>{userName}</h2>
  );
}

export default Header;
