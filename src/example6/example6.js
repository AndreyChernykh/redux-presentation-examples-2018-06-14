import { createStore, combineReducers } from 'redux'

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.payload.id)
    default:
      return state
  }
}


const nested = (state = null, action) => {
  console.log(state)
  return state;
}

const filters = (state = {}, action) => {
  if (action.type === 'CHANGE_FILTER') {
    return {
      ...state,
      nested: nested(state.nested, action)
    }
  }
  return state;
}

const rootReducer = combineReducers({
  combined: combineReducers({
    users,
    filters
  })
});

const store = createStore(rootReducer, {
  combined: {
    users: [
      {
        id: 1,
        name: 'John Doe'
      }
    ],
    filters: {
      nested: 'I\'m Mr. Nested Data! Look at me!'
    }
  }
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
});

store.dispatch({
  type: 'CHANGE_FILTER',
})


