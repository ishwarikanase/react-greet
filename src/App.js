import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      {/* <Greet name=" bruce" heroName="super hero">
        <p>this is bruce and he is a super hero</p>
      </Greet>
      <Greet name="clark" heroName="spider hero"><p>this is clark and he is a spider hero</p></Greet>
      <Greet name="diana" heroName="spider women"><p>this is diana and he is a spider women</p></Greet>

      <Welcome name=" bruce" heroName="super hero" />
      <Welcome name="clark" heroName="spider hero" />
      <Welcome name="diana" heroName="spider women" />
      <Hello /> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      <UserGreeting></UserGreeting>
    </div>
  );
}

export default App;
