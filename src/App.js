import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [],
    }

    this.addToList('testing', true, Date.now() + 1000*60*60*24)
  }

  addToList(name, isCompleted, dueDate){
    const newTodos = addToDo(this.state.todos, name, isCompleted, dueDate)
    this.setState({
      todos: newTodo,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
