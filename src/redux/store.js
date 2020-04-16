import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
 //now unused
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'sdfsfsdfsf', likes: 12},
                {id: 2, message: 'sdfvxvx', likes: 11},
                {id: 3, message: 'vnzfsfaff', likes: 7}
            ],
            textArea: '',
            image: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'
        },
        dialogsPage: {
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
        },
        sideBarPage: {

        }
    },
    renderApplication() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.renderApplication = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);

        this.renderApplication(this._state);
    }
};

export default store;
window.store = store;
