import React from 'react';
import './container.css';

const Modal = ({ isOpen, type, winner, onClose }) => {
    if (!isOpen) return null;

    const isWinner = type === 'winner';
    const title = isWinner ? '🏆 VICTORY! 🏆' : '🤝 IT\'S A TIE! 🤝';
    const message = isWinner 
        ? `${winner} has conquered the arena!` 
        : 'Great battle! No one wins this round.';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className={`modal-content ${isWinner ? 'winner' : 'tie'}`}
                onClick={e => e.stopPropagation()}
            >
                <h2 className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <button className="modal-button" onClick={onClose}>
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Modal;

