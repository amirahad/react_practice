import React from 'react';
import './App.css';
import Person from './Person/Person'
function App() {
  return (
    <div className="App"> 
        <h1>Hey! I am learning REACT</h1> 
        <h2>Myself, Amir Ahad</h2>
        <Person name="Amir" age="22"/>
        <Person name="Raza" age="21"/>
        <Person name="Ahad" age="25"/> 
    </div>
  );
}

export default App;
