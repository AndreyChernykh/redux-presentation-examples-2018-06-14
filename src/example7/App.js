import React, { Component, PureComponent } from 'react';
import './../App.css';

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
  state = {
    name: 'Bob'
  }

  changeName = () => {
    this.setState({
      name: 'John Doe'
    });
  }

  render() {
    return (
      <div className="App">
        App
        <Child name={this.state.name}/>
        <div>|</div>
        <ChildWithAction changeName={this.changeName}/>
      </div>
    );
  }
}

export default App;
