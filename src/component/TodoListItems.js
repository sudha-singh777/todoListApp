import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeTodoItems} from '../store/action/todoAction';
import {updateTodoStatus} from '../store/action/statusAction';

class TodoListItems extends Component {
    // console.log(props,"props")
    removeTodoItems=(todoId)=>{
        this.props.removeTodoItems(todoId);
       // console.log(hello,"hr")
    }
    updateStatusOfTodo=(todoId)=>{
        this.props.updateTodoStatus(todoId);
    }
    render(){
    return (
        <React.Fragment>
       
            <tr className={this.props.status ==="Completed" ? "bg-success" : "bg-info"} key={this.props.id}>
                <th scope="row">1</th>
                <td>{this.props.taskName}</td>
                <td>{this.props.taskDate}</td>
                <td><p className="px-2 text-danger"
                    onClick={()=>this.updateStatusOfTodo(this.props)}>
                    {this.props.status}</p>
                </td>
                <td><Link to={`/edit/${this.props.id}`} className="px-2">
                        <span className="icon is-small text-white">
                            <i className="fas fa-edit"></i>
                        </span>
                    </Link> 
                    <p className="px-2 text-danger"
                        onClick={()=>this.removeTodoItems(this.props.id)}
                        >
                        <span className="icon is-small">
                            <i className="fas fa-trash-alt"></i>
                        </span>
                    </p>  
                </td>
            </tr>
        </React.Fragment>
    )
    }
}

export default connect(null,{removeTodoItems,updateTodoStatus})(TodoListItems);
