import React from 'react';
import { HashRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Header />
                    <div className="container">
                        <Routes >
                                <Route path="/" element={<Home />} />
                                <Route path="/movie/:imdbID" element={<MovieDetail />} />
                        </Routes>
                    </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
