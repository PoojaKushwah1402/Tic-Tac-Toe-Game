import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Link } from "react-router-dom";

import "./container.css";
import './index.css';

const Details = (props) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [error, setError] = useState('');

    const trimmedPlayer1 = player1.trim();
    const trimmedPlayer2 = player2.trim();
    
    // Check if names are the same (case-insensitive)
    const namesAreSame = trimmedPlayer1 && trimmedPlayer2 && 
        trimmedPlayer1.toLowerCase() === trimmedPlayer2.toLowerCase();
    
    // Check if both names are filled
    const bothNamesFilled = trimmedPlayer1 && trimmedPlayer2;
    
    // Button should be disabled if names aren't filled or if they're the same
    const isDisabled = !bothNamesFilled || namesAreSame;

    const handlePlayer1Change = (e) => {
        setPlayer1(e.target.value);
        setError('');
    };

    const handlePlayer2Change = (e) => {
        setPlayer2(e.target.value);
        setError('');
    };

    const handleSubmit = () => {
        if (namesAreSame) {
            setError('Player names must be different!');
            return;
        }
        props.setDetails(trimmedPlayer1, trimmedPlayer2);
    };

    return (
        <div className='container'>
            <div className='player'>
                <div className='icon'>
                    <CloseIcon fontSize="large" />
                </div>
                <input 
                    placeholder='Enter Player 1 name...' 
                    value={player1}
                    onChange={handlePlayer1Change}
                    maxLength={15}
                />
            </div>

            <div className='player'> 
                <div className='icon'>
                    <RadioButtonUncheckedIcon fontSize="large" />
                </div>
                <input 
                    placeholder='Enter Player 2 name...' 
                    value={player2}
                    onChange={handlePlayer2Change}
                    maxLength={15}
                />
            </div>

            {namesAreSame && (
                <div className='error-message'>
                    ⚠️ Player names must be different!
                </div>
            )}

            {error && (
                <div className='error-message'>
                    ⚠️ {error}
                </div>
            )}

            <Link 
                to={isDisabled ? '#' : '/gamedashboard'} 
                className='link-dec submit'
                onClick={(e) => {
                    if (isDisabled) {
                        e.preventDefault();
                    }
                }}
            >
                <button 
                    className='submit-user-detail' 
                    onClick={handleSubmit}
                    disabled={isDisabled}
                > 
                    Start Battle
                </button>
            </Link>
        </div>
    );
};

export default Details;
