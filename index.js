const createStore = function (reducer, initiaState) {
    let currentReducer = reducer
    let currentState = initiaState
    let listener = () => {}

    return {
        getState() {
           return currentState
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            listener()
            return action
        },
        subscribe(newListener) {
            listener = newListener
        }
    }
}

