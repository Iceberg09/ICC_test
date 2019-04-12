import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todoI.completed ?
			'line-through' : 'none'
		}
	}

	render() {
		const { id, title } = this.props.todoI;
		return (
			<div style = {this.getStyle()}>
			   <p>
			   <input type="checkbox" onChange={this.props.markCompleteI.bind(this, id)}/> {' '}
			   { title }
			   <button onClick={this.props.delTodoI.bind(this, id)} style={btnStyle}>x</button>
			   </p>
			</div>
		);
	}
}

// PropTypes
TodoItem.propTypes = {
  todoI: PropTypes.object.isRequired,
  markCompleteI: PropTypes.func.isRequired,
  delTodoI: PropTypes.func.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 8.5px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem