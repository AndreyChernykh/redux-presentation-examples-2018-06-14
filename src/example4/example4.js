const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};

const todos = (state, action) => {}
const filters = (state, action) => {}

const todoApp = combineReducers({
  todos,
  filters
});