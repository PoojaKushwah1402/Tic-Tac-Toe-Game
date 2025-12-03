import React from "react";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PanToolIcon from '@mui/icons-material/PanTool';

const DisplayPlayer = ({ current, p1, p2 }) => {
    const playing = (current === p1) ? p1 : p2;
    const waiting = (current === p1) ? p2 : p1;

    return (
        <div className='display-user'>
            <div className='player-waiting'>
                <PanToolIcon fontSize="large" />
                <span>{waiting}</span>
            </div>

            <div className='player-playing'>
                <SportsEsportsIcon fontSize="large" />
                <span>{playing}</span>
            </div>
        </div>
    );
};

export default DisplayPlayer;
