// const element = document.createElement('h1');
// element.innerHTML = "Hello world";
// const container = document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firsName : "Ferran",
  lastName : "Jassé"
}

function getFullName(user){
  return `${user.firsName} ${user.lastName}`
}

function getGreating(user){
  if(user){
    return <h1>Hello {getFullName(user)}, welcome to React</h1>
  }
  return <h1>Hello Strange</h1>
}

const name = "Ferran";

const element =  <div>{getGreating(user)}</div>
const container = document.getElementById('root');

ReactDOM.render(element, container);



