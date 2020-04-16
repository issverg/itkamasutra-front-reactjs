const UPDATE_AREA = 'UPDATE-AREA';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'sdfsfsdfsf', likes: 12},
        {id: 2, message: 'sdfvxvx', likes: 11},
        {id: 3, message: 'vnzfsfaff', likes: 7}
    ],
    textArea: '',
    image: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_AREA: {
            return {
                ...state,
                textArea: action.text
            }
        }
        case ADD_POST: {
            let post = state.textArea;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: post, likes: 0}],
                textArea: ''
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (message) => {
    return {type: ADD_POST, message: message};
};

export const updateAreaActionCreator = (text) => {
    return {type: UPDATE_AREA, text: text};
};

export default profileReducer;
