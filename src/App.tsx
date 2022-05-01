import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Album from './components/Album';
import Home from './components/Home';
import { Albums, Photos } from './types';
import api from "./api";
import Photo from './components/Photo';

function App() {
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [photos, setPhotos] = useState<Photos[]>([]);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }
  const loadData = async () => {
    let arrayAlbums = await api.getAllAlbums();
    let arrayPhotos = await api.getAllPhotos();
    setPhotos(arrayPhotos)
    setAlbums(arrayAlbums)
  }

  useEffect(()=>{loadData()},[])

  return (
    <div className="App">
      <h1>Galeria - API - PlaceHolder</h1>
      <Link to="/">Home</Link> - <button onClick={handleClick}>Voltar</button>
      <hr />
      <Routes>
        <Route path='/' element={<Home albums={albums} />} />
        <Route path="/album/:albumId" element={<Album photos={photos} />} />
        <Route path="/album/:albumId/photo/:photoId" element={<Photo photos = {photos} />} />
      </Routes>
    </div>
  )
}

export default App
