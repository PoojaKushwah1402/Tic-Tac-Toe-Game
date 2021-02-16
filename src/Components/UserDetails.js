import React from "react";
import { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import ExposureZeroIcon from '@material-ui/icons/ExposureZero';
import { Link } from "react-router-dom";


import   "./container.css";


const Details = ( props ) => {

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('')

    return(
        <div className='container' >
            <div className='player' >
               <label>Enter Player1 Name : </label>
               <input placeholder='Player 1 Name' onChange={(e)=>setPlayer1(e.target.value)} />
               <div className='icon' > <CloseIcon /> </div>
            </div>

            <div className='player' > 
                <label>Enter Player2 Name : </label>
                <input placeholder='Player 2 Name' onChange={(e)=>setPlayer2(e.target.value)} />
                <div className='icon'><ExposureZeroIcon/></div>
            </div>

            <Link to='/gamedashboard' className='link-dec' >
                <button 
                    className='submit-user-detail' 
                    onClick={()=>props.setDetails(player1, player2)}
                    disabled={!(player1 && player2)}  > 
                    Submit 
                </button>
            </Link>

        </div>
    )

}

export default Details;