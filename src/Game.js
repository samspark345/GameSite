import React from "react";
import { format } from 'react-string-format';

function Game(props) {
    const text = 'Title: '+props.title+'\n release_date: '
    + props.release;
    return (
         
        <p>
            Title: {props.title}<br></br> 
            Release Date: {props.release}<br></br>
            Genre : {props.genre}<br></br>
        </p>

    );
}

export default Game;