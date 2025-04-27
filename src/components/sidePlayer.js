import React from 'react';
import { useSelector } from 'react-redux';

function SidePlayer() {
    const players = useSelector(state => state.players);

    const sortedPlayers = [...players].sort((a, b) => b.playerScore - a.playerScore);

    return (
        <div className='bg-light p-3 h-100'>
            <h3 className='bg-light text-success p-3 border'>Table of Fame</h3>
            {sortedPlayers.map((player, index) => (
                <div key={index} className='d-flex bg-light text-success gap-3 p-2 justify-content-between border mb-3 '>
                    <div>
                        <h5>{index + 1}. {player.playerName}</h5>
                    </div>
                    <div>
                        <h5> Score {player.playerScore}  </h5>
                    </div>
                    
                </div>

            ))}
        </div>
    );
}

export default SidePlayer;
