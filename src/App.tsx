import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Albums, Photos } from './types/types';
import api from "./api/api";
import MainRoutes from './routes/MainRoutes';

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
      <MainRoutes albums={albums} photos={photos}/>
    </div>
  )
}

export default App
