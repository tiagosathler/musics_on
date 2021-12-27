import React from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import ContextMusicsOn from '../ContextApi/ContextMusicsOn';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const MIN_ARTIST_CARACTERES = 1;

function Search() {
  const { albumsCollection, setAlbumsCollection, userName } = useContext(ContextMusicsOn);
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(userName);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const albums = await searchAlbumsAPI(artist);
    console.log(albums);
    console.log(albumsCollection);

    setAlbumsCollection({ ...albumsCollection, albums, nameArtist: artist });

    setLoading(false);
  };

  const formFunc = () => (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="search-artist-input">
          <input
            id="search-artist-input"
            type="text"
            onChange={ (e) => setArtist(e.target.value) }
            value={ artist }
          />
        </label>
        <button
          type="submit"
          disabled={ artist.length <= MIN_ARTIST_CARACTERES }
        >
          search
        </button>
      </form>
    </div>
  );

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <h2>{userName}</h2>
      {formFunc()}
    </div>

  );
}

export default Search;
