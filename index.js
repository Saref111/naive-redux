const createStore = function (reducer, initiaSstate) {
    const currentReducer = reducer
    const currentState = initiaSstate

    return {
        getState() {
           return currentState
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            return action
        }
    }
}