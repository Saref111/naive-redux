const createStore = function (reducer, initiaState) {
    let currentReducer = reducer
    let currentState = initiaState

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

// tests

const reducer = (state, action) => {
    switch (action.type) {
        case 'TEST':
            return {...state, ...action.payload}
    }
}

const store = createStore(reducer, {value: 0})

console.log(store);

const st1 = store.getState()
console.log(st1)

store.dispatch({type: 'TEST', payload: {
    value: '1'
}})
const st2 = store.getState()
console.log(st1 === st2)

