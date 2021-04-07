import React from 'react';

import DisplayGame from "./Display";
import DisplayPlayer from "./DisplayPlayer";


const Dashboard = props => {
//console.log('dashborad',{...props})
    return(
        <> 
            <DisplayPlayer current = {props.current} p1 = {props.p1} p2 = {props.p2} />
            <DisplayGame player = {props.player} handler = {props.handler} onreset = {props.onreset} />
            
        </>
    )

}

export default Dashboard;



