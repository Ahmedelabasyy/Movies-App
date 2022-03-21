import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAllEpisods, fetchAllMovies, fetchAllShows } from '../../features/slice/moviesSlice';
import userImage from '../../images/me.jpg';
import './header.scss';

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") {
      alert("Please Enter Movie name");
    } else {
      dispatch(fetchAllMovies(term));
      dispatch(fetchAllShows(term));
      dispatch(fetchAllEpisods(term));
      setTerm("");
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <h2 className="logo"><i className='fa fa-television'></i>Cinema2Go</h2>
      </Link>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            placeholder='Search for a movie or show' 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={userImage} alt="user" />
      </div>
    </div>
  )
}
