import React from "react";
import { green } from '@material-ui/core/colors';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';//playing
import PanToolIcon from '@material-ui/icons/PanTool';//wait

const DisplayPlayer = ({current, p1, p2}) => {
    let playing = (current === p1 )? p1 : p2;
    let waiting = (current === p1 )? p2 : p1;
    


    return(
        <div className='display-user' >
            <div className='player-waiting' > {waiting}  
                <PanToolIcon fontSize="large" color="secondary" />
            </div>

            <div className='player-playing'> {playing}  
                <SportsEsportsIcon fontSize="large" style={{ color: green[700]}}/> 
            </div>
        </div>
    )

}

export default DisplayPlayer;