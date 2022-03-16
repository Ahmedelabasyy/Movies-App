import React from 'react';
import { Link } from 'react-router-dom';
import './moviecard.scss';
import image from '../../images/got.jpg';

export default function MovieCard(props) {
  const {data} = props;
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster ? data.Poster : image} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p className='year'>{data.Year ? data.Year :  data.Released}</p>
              <p> {data.Episode && ` Episode ${data.Episode}`}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  
}
