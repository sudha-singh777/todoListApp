import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import TodoList from './component/TodoList';
import TodoListAdd from './component/AddTodoList';
import TodoListEdit from './component/TodoListEdit';

 class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={TodoList}/>
            <Route path="/todoAdd" component={TodoListAdd}/>
            <Route path="/edit/:id" component={TodoListEdit}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}


export default App;