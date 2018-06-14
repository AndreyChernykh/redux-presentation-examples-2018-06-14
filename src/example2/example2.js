import { createStore } from 'redux'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      }
    default:
      return state
  }
}

const store = createStore(rootReducer, {
  users: [
    {
      id: 1,
      name: 'John Doe'
    }
  ],
})

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({
  type: 'ADD_USER',
  payload: {
    id: 2,
    name: 'Jane Doe'
  }
});

store.dispatch({
  type: 'REMOVE_USER',
  payload: {
    id: 1,
  }
})

