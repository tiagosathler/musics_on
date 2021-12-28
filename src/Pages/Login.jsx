import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ContextMusicsOn from '../ContextApi/ContextMusicsOn';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading';
import Header from '../Components/Header';

const MIN_CARACTER_LENGTH = 3;

function Login() {
  const { userName, setUserName } = useContext(ContextMusicsOn);
  const [password, setPassword] = useState({ password: '' });
  const [loading, setLoading] = useState(false);
  const [tiagao, setTiagao] = useState(false);

  console.log('massa', tiagao);

  useEffect(() => {
    console.log('Tiagao da Massa');
    setTiagao((prevState) => !prevState);
    // é possivel alterar o estado utilizando o setState
  }, [password]);

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
    setLoading(false);

    navigate('/search');
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
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
      <Button
        type="submit"
        disabled={ password.length < MIN_CARACTER_LENGTH }
        variant="light"
      >
        Light

      </Button>
      <Button
        disabled={ password.length < MIN_CARACTER_LENGTH }
        variant="dark"
        type="submit"
      >
        Dark
      </Button>
    </div>
  );
}

export default Login;
