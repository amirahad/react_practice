import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Hey Bro!'
  }

  inputChangedHandeler = (event) => {
    this.setState({username: event.target.value})
  }


  render(){
    return (
      <div className="App"> 
          <h1>Hey! I am learning REACT</h1> 
          <h2>Myself, Amir Ahad</h2>
          {/* <Person name="Amir" age="22"/>
          <Person name="Raza" age="21"/>
          <Person name="Ahad" age="25"/>  */}
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Raza" />
          <UserOutput userName={this.state.username} />
          <UserInput changed={this.inputChangedHandeler} />
      </div>
    );
  };
}

export default App;
