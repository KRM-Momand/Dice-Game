import React, { useState, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';
import { addScore, setCurrentRoll } from '../store/store.js';

function Player() {
    const [score, setScore] = useState(0);
    const playerLength = useSelector(state => state.players);
    const dispatch = useDispatch();

    const finalScore = useRef();

    const diceIcon = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    }

    const produceRand = () => Math.floor((Math.random() * 6) + 1);

    const onClickHandler = (index) => {
        const interval = setInterval(() => {
            const randomScore = produceRand();
            setScore(randomScore);
            finalScore.current = randomScore;
            dispatch(setCurrentRoll({number: randomScore, diceFace: diceIcon[randomScore], index: index }))
        }, 200);

        setTimeout(()=> {
            clearInterval(interval);
            dispatch(addScore(finalScore.current, index));
            

        }, 3000);
    }



  return (
    <div className='custom-player p-2 bg-light'>
        {playerLength.map((player, index) => (
            <div key={index} className='custom-player-child p-2 border rounded m-1'>

                <h1 className='text-success text-center'>
                    {player.playerName}
                </h1>
                <h5 className='text-center text-success'> Score: {player.playerScore} </h5>
                <Button variant='success' className='w-100 my-3' onClick={() => onClickHandler(index)}> Roll </Button>
            </div>
        ))}

      
    </div>
  )
}

export default Player
