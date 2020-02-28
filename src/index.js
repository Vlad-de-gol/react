import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css'; 


const person = {
  name:{
    first:'Peter',
    last:'Smith'
  },
  age:27
};

const text = `
  <ul>
    <li>${person.name.first}</li>
    <li>${person.name.last}</li>
    <li>${person.age}</li>
  </ul>
`;

console.log(text);


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples plus</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit/>
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits/>
        { /* change code above this line */ }
      </div>
    );
  }
};



class Final extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Lesson 10 </h1>
        <TypesOfFood/>,
        <Clock/>
      </div>
    );
  }
};






ReactDOM.render(   
  <Final/>,
  document.getElementById('root')
);
