import React from 'react';
import { Link } from "react-router-dom";
import "./container.css";

const NotFound = () => {
    return (
        <div className='not-found-div'>
            <div className="not-found-emoji">🎮</div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p className="not-found-message">
                Oops! This page got lost in the matrix.
            </p>
            <Link to="/" className="link-dec">
                <button className="not-found-button">
                    Return Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
