import {createStore} from 'redux';

const ADD_PLAYER = 'addPlayer';
const ADD_SCORE = 'addScore';
const SET_CURRENT_ROLL = 'setCurrentRoll';

const initialState = {
    players: [],
    currentRoll : null
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAYER:
            return {...state, players: [...state.players, {playerName: action.payload, playerScore: 0}]}
        case ADD_SCORE: 
            return {...state, players: state.players.map((player, index) => 
                index === action.payload.index ? {...player, playerScore: player.playerScore + action.payload.score} : player
            ) }
        case SET_CURRENT_ROLL:
            return {...state, currentRoll: action.payload }
        default: 
            return state;
    }

}

const addPlayer = (playerName) => {
    return {type: ADD_PLAYER , payload: playerName}
}

const addScore = (score, index) => {
    return {type: ADD_SCORE, payload: {score, index}}
}

const setCurrentRoll = (payload) => {
    return {type: SET_CURRENT_ROLL, payload}
}

const store = createStore(playerReducer);

export {addPlayer, addScore, setCurrentRoll};

export default store;
