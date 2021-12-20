import React from 'react';
import ProviderMusicsOn from './ContextApi/ProviderMusicsOn';
import Rotas from './Rotas';

function App() {
  return (
    <ProviderMusicsOn>
      <Rotas />
    </ProviderMusicsOn>
  );
}

export default App;
