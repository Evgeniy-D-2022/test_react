import React, { Component } from "react";
// import ColorPicker from "./ColorPicker";
// import Counter from './Counter/Counter'
// import Dropdown from "./Dropdown/Dropdown";
// import TodoList from './TodoList';
// import initialTodos from './todos.json';
import Form from "./Form/Form";

class App extends Component {

  state = {
    // todos: initialTodos,

    // todos: [
    //   { id: 'id-1', text: 'Выучить основы React', completed: true },
    //   { id: 'id-2', text: 'Разобраться с React Route', completed: false },
    //   { id: 'id-3', text: 'Понять Redux', completed: false },
    // ],

  };

  formSubmitHandler = data => {
    console.log(data);
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  render() {
    // const { todos } = this.state;
    // const totalTodoCounts = todos.length;
    // const complitedTodosCounts = todos.reduce((acc, todo) => 
    // (todo.completed ? acc + 1 : acc), 0);
    
    return (
      <>
      < Form onSubmit={this.formSubmitHandler}/>
     
      {/* <h1>hi</h1> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <Counter /> */}
      {/* <TodoList todos= {todos} onDeleteTodo={this.deleteTodo}/>
      <div>
        <p>Total amount: {totalTodoCounts};</p>
        <p>Amount done: {complitedTodosCounts};</p>
      </div> */}
      </>

    )
  }
}

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default App;