import React from 'react';
import './movielisting.scss';
import Slider from 'react-slick';
import { settings } from '../../common/settings';
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
export default function MovieListing() {
  const {allMovies} = useSelector((state) => state.movies);
  const {allShows} = useSelector((state) => state.movies);
  let renderMovies, renderShows = '';

  renderMovies = allMovies.Response === 'True' ? (
    allMovies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ): (
    <div className="movies-error"><h3 className="error">No movies Found</h3></div>
  )

  renderShows = allShows.Response === 'True' ? (
    allShows.Search.map((serie, index) => (
      <MovieCard key={index} data={serie} />
    ))
  ): (
    <div className="movies-error"><h3 className="error">No movies Found</h3></div>
  )
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>All Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {renderMovies}
          </Slider>
        </div>
      </div>

      <div className="movie-list">
        <h2>All Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {renderShows}
          </Slider>
        </div>
      </div>
    </div>
  )
}
