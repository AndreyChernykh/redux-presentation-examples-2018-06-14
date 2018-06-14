import { createStore, combineReducers } from 'redux'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user
});

export const store = createStore(rootReducer, {
  user: {
    id: 1,
    name: 'John Doe'
  },
})

store.subscribe(() =>
  console.log(store.getState())
)
