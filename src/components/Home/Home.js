import React, { useEffect } from 'react';
import './home.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAllMovies, fetchAllShows } from '../../features/slice/moviesSlice';
export default function Home() {
  
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAllMovies());
      dispatch(fetchAllShows());
    
  }, [dispatch]);
  return (
    <div className='main'>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  )
}
