import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import "./container.css";

const getSymbol = (symbol, id) => {
    if (symbol === 'X') {
        return <CloseIcon data-custom-id={id} fontSize="large" />;
    }
    return <RadioButtonUncheckedIcon data-custom-id={id} fontSize="large" />;
};

const DisplayGame = ({ player, handler, onreset }) => {
    let i = 0, j = 0;

    return (
        <>
            <div className='Main-box' id='main' onClick={(e) => handler(e)}>
                <div id='_00' data-custom-id='_00' className={player[i][j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_00') : ''}
                </div>
                <div id='_01' data-custom-id='_01' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_01') : ''}
                </div>
                <div id='_02' data-custom-id='_02' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_02') : ''}
                </div>

                <div id='_10' data-custom-id='_10' className={player[++i][j=0] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_10') : ''}
                </div>
                <div id='_11' data-custom-id='_11' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_11') : ''}
                </div>
                <div id='_12' data-custom-id='_12' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_12') : ''}
                </div>

                <div id='_20' data-custom-id='_20' className={player[++i][j=0] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_20') : ''}
                </div>
                <div id='_21' data-custom-id='_21' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_21') : ''}
                </div>
                <div id='_22' data-custom-id='_22' className={player[i][++j] ? 'occupied-div' : 'cell-box'}>
                    {player[i][j] ? getSymbol(player[i][j], '_22') : ''}
                </div>
            </div>
            <button className='reset-game' onClick={() => onreset()}>
                Reset Game
            </button>
        </>
    );
};

export default DisplayGame;
