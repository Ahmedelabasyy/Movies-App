import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router basename={window.location.pathname || ''}>
                <Header />
                    <div className="container">
                        <Routes >
                                <Route exact path="/" element={<Home />} />
                                <Route path="/movie/:imdbID" element={<MovieDetail />} />
                        </Routes>
                    </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
