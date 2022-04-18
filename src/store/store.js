import reducer from "./reducer";

const store = {
    _state: reducer(),
    getState() {
        return this._state;
    },
    _callSubscriber() {
        // The function isn't full now
        console.log('')
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state = reducer(this._state, action);
    },
}

export default store;

window.store = store;