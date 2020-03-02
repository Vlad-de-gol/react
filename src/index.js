import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css'; 


function Animal(name, voice){ 
  this.name = name;
  this.voice = voice;  
}

Animal.prototype.say = function(){
  console.log(this.name, 'voice', this.voice);
  
}

const dog = new Animal('Dog','woof');
const cat = new Animal('Cat','meay');



dog.say();
cat.say();


let animalPull = {};
console.log(animalPull);


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
