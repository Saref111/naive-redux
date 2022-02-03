const createStore = function (reducer, initiaState) {
    let currentReducer = reducer
    let currentState = initiaState
    let listeners  = new Set()

    return {
        getState() {
           return currentState
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            listeners.forEach((c)=> c())
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

