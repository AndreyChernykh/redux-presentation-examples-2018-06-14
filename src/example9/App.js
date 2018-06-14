import React, { Component, PureComponent } from 'react';
import './../App.css';

import { store } from "./store";
import { connect, Provider } from 'react-redux';

const SubChild = ({ name }) => (
  <div>|______<b>{name}</b></div>
);

const mapStateToTodoListProps = (state) => ({
  name: state.user.name
});

const SubChildConnected = connect(mapStateToTodoListProps)(SubChild);

const Child = () => (
  <div>
    |__ Child
    <SubChildConnected />
  </div>
);

////////////////////////////////

const SubChildWithAction = ({ changeName }) => (
  <div>
    |______<button onClick={() => changeName('!!! Jane Doe !!!')}>Change the name</button>
  </div>
);

const mapDispatchToTodoListProps = (dispatch) => ({
  changeName: (name) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: { name: name },
    });
  }
});

const SubChildWithActionConnected = connect(null, mapDispatchToTodoListProps)(SubChildWithAction);

const ChildWithAction = () => (
  <div>
    |__ Child With Action
    <SubChildWithActionConnected />
  </div>
);

////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Child />
        <div>|</div>
        <ChildWithAction />
      </div>
    );
  }
}

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppRedux;