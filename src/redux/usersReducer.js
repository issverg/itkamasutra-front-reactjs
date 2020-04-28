const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURR_PAGE = 'SET_CURR_PAGE';
const SET_TOT_USERS = 'SET_TOT_USERS';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
    users: [],
    pageSize: 5,
    countUsers: 0,
    currentPage: 1,
    isFetching: false
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
                users: action.users
            }
        }
        case SET_CURR_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOT_USERS: {
            return {
                ...state,
                countUsers: action.countUsers
            }
        }
        case TOGGLE_LOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => { return {type: FOLLOW, userId}; };
export const unFollowActionCreator = (userId) => { return {type: UN_FOLLOW, userId}; };
export const setUsersActionCreator = (users) => { return {type: SET_USERS, users}; };
export const setCurrPageActionCreator = (page) => { return {type: SET_CURR_PAGE, currentPage: page}; };
export const setTotalUsersActionCreator = (users) => { return {type: SET_TOT_USERS, countUsers: users}; };
export const setFetchingActionCreator = (flag) => { return {type: TOGGLE_LOADER, isFetching: flag}; };

export default usersReducer;
