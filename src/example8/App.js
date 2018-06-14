import React, { Component, PureComponent } from 'react';
import './../App.css';

import { store } from "./store";
import { connect, Provider } from 'react-redux';

const SubChild = ({ name }) => (
  <div>|______<b>{name}</b></div>
);

const Child = ({ name }) => (
  <div>
    |__ Child
    <SubChild name={name} />
  </div>
);

const SubChildWithAction = ({ changeName }) => (
  <div>
    |______<button onClick={changeName}>Change the name</button>
  </div>
);

const ChildWithAction = ({ changeName }) => (
  <div>
    |__ Child With Action
    <SubChildWithAction changeName={changeName} />
  </div>
);

class App extends Component {
  changeName = () => {
    this.props.changeName('~~Jane Doe~~~');
  }

  render() {
    return (
      <div className="App">
        App
        <Child name={this.props.name}/>
        <div>|</div>
        <ChildWithAction changeName={this.changeName}/>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    name: state.user.name
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({
        type: 'CHANGE_NAME',
        payload: { name: name },
      });
    }
  };
};

const AppConnected = connect(
  mapStateProps,
  mapDispatchProps
)(App);

const AppRedux = () => (
  <Provider store={store}>
    <AppConnected />
  </Provider>
)

export default AppRedux;