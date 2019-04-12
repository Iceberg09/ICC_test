import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
  	// console.log(this.props.todos)
    return this.props.todoT.map((todoF) => (
    	<TodoItem key={todoF.id} todoI={todoF} markCompleteI={this.props.markCompleteT}
    	delTodoI={this.props.delTodoT}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todoT: PropTypes.array.isRequired,
  markCompleteT: PropTypes.func.isRequired,
  delTodoT: PropTypes.func.isRequired
}

export default Todos;
