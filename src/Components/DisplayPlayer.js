import React from "react";

const DisplayPlayer = ({current, p1, p2}) => {
    let playing = (current == p1 )? p1 : p2;
    let waiting = (current == p1 )? p2 : p1;
    


    return(
        <div className='display-user' >
           <div className='player-waiting' > {waiting} Waiting </div>
           <div className='player-playing'> {playing} Playing </div>
        </div>
    )

}

export default DisplayPlayer;