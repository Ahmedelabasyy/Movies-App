import React, { useEffect } from 'react';
import './home.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAllEpisods, fetchAllMovies, fetchAllShows } from '../../features/slice/moviesSlice';
export default function Home() {
  const Movies = "Game",
        Shows = "Walking",
        Episods = "Game of Thrones";
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAllMovies(Movies));
      dispatch(fetchAllShows(Shows));
      dispatch(fetchAllEpisods(Episods));
    
  }, [dispatch]);
  return (
    <div className='main'>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  )
}
