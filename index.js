const createStore = (reducer, initiaState) => {
    let currentReducer = reducer
    let currentState = initiaState
    const listeners  = new Set()

    return {
        getState() {
           return currentState
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            listeners.forEach((listener)=> listener())
            return action
        },
        subscribe(newListener) {
            listeners.add(newListener)
            return () => {
                listeners.delete(newListener)
            }
        }
    }
}

const combineReducers = (reducers) => {
    return (state = {},  action) => Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
    }, {})
}