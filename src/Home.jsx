import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
    return (
        <div className = "home">
            <h1>Welcome to *Poker App Name*!</h1>
            <Link to = "/poker-table">
            <button>Deal Cards</button>
            </Link>
        </div>
    );
}

export default Home;