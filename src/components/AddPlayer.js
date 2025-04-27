import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPlayer } from '../store/store.js';

import  {Form , Button} from 'react-bootstrap';

function AddPlayer() {
    const [playerName, setPlayerName] = useState('');

    const dispatch = useDispatch();
    const totalPlayer = useSelector(state => state.players);

    const onChangeHandler = (e) => {
        setPlayerName(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(playerName);

        dispatch(addPlayer(playerName));

        setPlayerName('');
    }

  return (
    <div className='custom-addplayer bg-light p-2'>
        <div className=' border border-success rounded m-1 p-3'>

            <h2 className='text-success text-center mb-3'> Add Player Form </h2>

            {totalPlayer.length >= 4 ? (
                <h3 className='text-white bg-success text-center p-4 m-2'> No More Place</h3>
            ) : (
                <Form className='custom-form' onSubmit={onSubmitHandler} >
                <Form.Control className='custom-input' type='text' name='player' value={playerName} placeholder='Enter Player Name' onChange={onChangeHandler} />
                <Button variant='success' className='w-100 my-2' type='submit'>Add Player </Button>
                </Form>
            ) }
        </div>
      
    </div>
  )
}

export default AddPlayer
