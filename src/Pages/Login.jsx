import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import ContextMusicsOn from '../ContextApi/ContextMusicsOn';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading';

const MIN_CARACTER_LENGTH = 3;

function Login() {
  const { userName, setUserName } = useContext(ContextMusicsOn);
  const [password, setPassword] = useState({ password: '' });
  const [loading, setLoading] = useState(false);

  console.log(userName);
  console.log('te', password);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: userName,
    };

    setLoading(true);
    await createUser(user);

    navigate('/search');
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          required
          onChange={ (e) => setUserName(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          type="password"
          required
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        disabled={ password.length < MIN_CARACTER_LENGTH }
        type="submit"
      >
        login

      </button>
    </form>
  );
}

export default Login;
