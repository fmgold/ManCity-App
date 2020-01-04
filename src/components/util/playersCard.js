import React from 'react'


const PlayerCards=(props)=> {
    return (
        <div className="player_card_wrapper"> 
            <div className="player_card_thmb"
                style={{
                    background:`#f9f9ff url(${props.bck})`
                }}
            ></div>
            <div className="player_card_nfo">
                <div className="player_card_number">
                    {props.numb}
                </div>
                <div className="player_card_name">
                    <span>{props.name}</span>
                    <span>{props.lname}</span>
                </div>


            </div>
        </div>
    )
}

export default PlayerCards
