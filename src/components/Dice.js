import React from 'react';

import { useSelector } from 'react-redux';



function Dice() {
    const {number, diceFace, index} = useSelector(state => state.currentRoll || {});
    const players = useSelector(state => state.players);


  return (
    <div className='custom-dice bg-light'>
      <h4 className='text-success text-center'> {players[index]?.playerName} </h4>
      <h1 className='big-dice text-success text-center fw-normal fs-1 p-3 '> {diceFace} </h1>

    </div>
  )
}

export default Dice;
