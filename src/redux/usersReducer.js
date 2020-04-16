const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                   if (user.id === action.userId) {
                       return {...user, followed: true};
                   }
                   return user;
                })
            }
        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {type: FOLLOW, userId};
};

export const unFollowActionCreator = (userId) => {
    return {type: UN_FOLLOW, userId};
};

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users};

};

export default usersReducer;
