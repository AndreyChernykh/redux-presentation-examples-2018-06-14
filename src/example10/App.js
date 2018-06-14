import React, { Component, PureComponent } from 'react';
import './../App.css';

import { store } from "./store";
import { connect, Provider } from 'react-redux';
import { fetchUser } from './actions';
import { getUserName, getIsLoaded } from './selectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    if (!this.props.isLoaded) {
      return (<div className="App">Loading...</div>);
    }

    return (
      <div className="App">
        Hello! My name is <b>{this.props.name}</b>.
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: getUserName(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  onFetchUser: fetchUser,
};

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const AppRedux = () => (
  <Provider store={store}>
    <AppConnected />
  </Provider>
)

export default AppRedux;