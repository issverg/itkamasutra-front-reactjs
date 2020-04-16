const UPDATE_MSG = 'UPDATE-MSG';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    msgArea: '',
    contacts: [
        {id: 1, name: 'Sashka'},
        {id: 2, name: 'Mashka'},
        {id: 3, name: 'Pashka'},
        {id: 4, name: 'Natashka'}
    ],
    discuss: [
        {id: 1, content: 'Hey!'},
        {id: 2, content: 'Wassup?'},
        {id: 3, content: 'Nishtyak! Ty kak?'},
        {id: 4, content: 'Da tozhe norm!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let disc = state.msgArea;
            return {
                ...state,
                msgArea: '',
                discuss: [...state.discuss, {id: 6, content: disc}]
            }
        }
        case UPDATE_MSG: {
            return {
                ...state,
                msgArea: action.msg
            }
        }
        default:
            return state;
    }
};

export const updateMsgActionCreator = (msg) => {
    return {type: UPDATE_MSG, msg: msg};
};

export const addMessageActionCreator = (content) => {
    return {type: ADD_MESSAGE, content: content};
};

export default dialogsReducer;
