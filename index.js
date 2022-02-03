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

store.subscribe(() => {
    console.log('changed@!!!');
})

const st2 = store.getState()
console.log(st1 === st2)


store.dispatch({type: 'TEST', payload: {
    value: '122'
}})
