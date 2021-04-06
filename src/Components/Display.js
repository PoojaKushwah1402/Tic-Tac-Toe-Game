import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import   "./container.css";


const getSymbol = symbol =>  (symbol === 'X') ? <CloseIcon fontSize="large"/> : <RadioButtonUncheckedIcon fontSize="large"/>


const DisplayGame = ({ player, handler }) => {
    let i=0,j=0;

    return(
        <>
        <div className='Main-box' id='main' onClick = { (e) => handler(e) } >
            <div id='_00' className='cell-box A'  > { (player[i][j]) ? getSymbol(player[i][j]) : '' } </div>
            <div id='_01' className='cell-box '  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
            <div id='_02' className='cell-box'  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
            
            <div id='_10' className='cell-box ' > {(player[++i][j=0]) ? getSymbol(player[i][j]) : '' }  </div>
            <div id='_11' className='cell-box'  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
            <div id='_12' className='cell-box'  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
          
            <div id='_20' className='cell-box'  > { (player[++i][j=0]) ? getSymbol(player[i][j]): '' }  </div>
            <div id='_21' className='cell-box'  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
            <div id='_22' className='cell-box B'  > { (player[i][++j]) ? getSymbol(player[i][j]) : '' }  </div>
        </div>
        </>
    )

}

export default DisplayGame;