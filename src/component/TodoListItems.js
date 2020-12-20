import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeTodoItems} from '../store/action/todoAction';
import {updateTodoStatus} from '../store/action/statusAction';

class TodoListItems extends Component {
    
    removeTodoItems=(todoId)=>{
        this.props.removeTodoItems(todoId);
    }
    updateStatusOfTodo=(todoId)=>{
        this.props.updateTodoStatus(todoId);
    }
    render(){
    return (
        <React.Fragment>
       
            <tr className={this.props.status ==="Completed" ? "bg-success" : "bg-info"} key={this.props.id}>
                
                <td>{this.props.taskName}</td>
                <td>{this.props.taskDate}</td>
                <td><Link className="px-2 text-white"
                    onClick={()=>this.updateStatusOfTodo(this.props)}>
                    {this.props.status}</Link>
                </td>
                <td><Link to={`/edit/${this.props.id}`} className="px-2">
                        <span className="icon is-small text-white">
                            <i className="fas fa-edit"></i>
                        </span>
                    </Link> 
                    <Link className="px-2 text-danger"
                        onClick={()=>this.removeTodoItems(this.props.id)}
                        >
                        <span className="icon is-small">
                            <i className="fas fa-trash-alt"></i>
                        </span>
                    </Link>  
                </td>
            </tr>
        </React.Fragment>
    )
    }
}

export default connect(null,{removeTodoItems,updateTodoStatus})(TodoListItems);
