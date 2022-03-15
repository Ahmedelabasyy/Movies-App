import React, { useEffect } from 'react';
import './moviedetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMovieOrShowDetail, removeShownDetails } from '../../features/slice/moviesSlice';

export default function MovieDetail() {
  const {imdbID} = useParams();
  console.log(imdbID)
  const dispatch = useDispatch();
  const {selectedItem} = useSelector((state => state.movies));
  console.log(selectedItem);

  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeShownDetails())
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
        {Object.keys(selectedItem).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
          <div className="section-left">
            <div className="movie-title">{selectedItem.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {selectedItem.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {selectedItem.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {selectedItem.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {selectedItem.Year}
              </span>
            </div>
            <div className="movie-plot">{selectedItem.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{selectedItem.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{selectedItem.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{selectedItem.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{selectedItem.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{selectedItem.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={selectedItem.Poster} alt={selectedItem.Title} />
          </div>
        </>
        )}
    </div>
  );
};