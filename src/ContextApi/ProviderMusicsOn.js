import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextMusicsOn from './ContextMusicsOn';

function ProviderMusicsOn({ children }) {
  const USER_INITIAL_STATE = {
    userName: '',
  };

  const ALBUMS_INITIAL_STATE = {
    albums: [],
    nameArtist: '',
  };

  const [userName, setUserName] = useState(USER_INITIAL_STATE);
  const [albumsCollection, setAlbumsCollection] = useState(ALBUMS_INITIAL_STATE);

  const context = {
    userName,
    setUserName,
    albumsCollection,
    setAlbumsCollection,
  };

  return (
    <ContextMusicsOn.Provider value={ context }>
      {children}
    </ContextMusicsOn.Provider>
  );
}

ProviderMusicsOn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderMusicsOn;
