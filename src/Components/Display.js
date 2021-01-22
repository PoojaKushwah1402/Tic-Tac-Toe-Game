import React from "react";
import   "./container.css";

const makeFalse = () => {
    return false;
}

const DisplayGame = ({ player, handler }) => {
    let i=0,j=0,k=0;

   

    return(
        <div className='Main-box' id='main' onClick = { (e) => handler(e) } >
            <div id='00' className='cell-box'  > { (player[i][j]) ? (player[i][j]) : '' } </div>
            <div id='01' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
            <div id='02' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
            
            <div id='10' className='cell-box' > {(player[++i][j=0]) ? (player[i][j]) : '' }  </div>
            <div id='11' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
            <div id='12' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
          
            <div id='20' className='cell-box'  > { (player[++i][j=0]) ? (player[i][j]): '' }  </div>
            <div id='21' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
            <div id='22' className='cell-box'  > { (player[i][++j]) ? (player[i][j]) : '' }  </div>
        </div>
    )

}

export default DisplayGame;