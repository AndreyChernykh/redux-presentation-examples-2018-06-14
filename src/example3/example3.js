import { createStore, combineReducers } from 'redux'

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...users,
        action.payload
      ]
    case 'REMOVE_USER':
      return users.filter(user => user.id !== action.payload.id);
    default:
      return users
  }
}

const filters = (users = {}, action) => { return users; }

const rootReducer = combineReducers({
  users: usersReducer,
  filters
});

const store = createStore(rootReducer, {
  users: [
    {
      id: 1,
      name: 'John Doe'
    }
  ],
  filters: {

  }
})

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal users is to dispatch an action.
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

