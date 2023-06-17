import React, { Component } from "react";
// import ColorPicker from "./ColorPicker";
// import Counter from './Counter/Counter'
// import Dropdown from "./Dropdown/Dropdown";
import TodoList from './TodoList';

class App extends Component {

  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: false },
      { id: 'id-2', text: 'Разобраться с React Route', completed: false },
      { id: 'id-3', text: 'Понять Redux', completed: false },
    ],
  };

  render() {
    const { todos } = this.state;
    
    return (
      <>
      <h1>hi</h1>
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <Counter /> */}
      <TodoList todos= {todos}/>
      </>

    )
  }
}

// const App = () => {
//   return (
   
//   );
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default App;