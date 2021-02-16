import React from 'react';
import { Link } from "react-router-dom";

import DisplayGame from "./Display";
import DisplayPlayer from "./DisplayPlayer";


const Dashboard = props => {
console.log('dashborad',{...props})
    return(
        <> 
            <DisplayPlayer current = {props.current} p1 = {props.p1} p2 = {props.p2} />
            <DisplayGame player = {props.player} handler = {props.handler} />
            <Link to='/' >
                <button 
                    onClick={()=>props.resetWhole()}
                    className='end-game' > 
                    End Game   
                </button>
            </Link> 
        </>
    )

}

export default Dashboard;



