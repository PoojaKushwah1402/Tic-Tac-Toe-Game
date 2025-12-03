import React from 'react';
import { Link } from "react-router-dom";
import "./container.css";

const Header = props => {
    return (
        <header className='header'>
            <div className='brand'>
                <Link to='/' className='link-dec left' onClick={() => props.resetWhole()}>
                    <div className="logo-icon">✕○</div>
                    <div className='heading'>TicTacToe</div>
                </Link>
            </div>
            
            {props.userLogin && (
                <div className='brand right'>
                    <Link to='/' className='link-dec'>
                        <button 
                            onClick={() => props.resetWhole()}
                            className='end-game'
                        > 
                            End Game   
                        </button>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header;
