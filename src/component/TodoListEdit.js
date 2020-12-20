import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editTodoItems} from '../store/action/todoAction';
import { Link } from 'react-router-dom';

 class TodoListEdit extends Component {
    constructor(props) {
        super(props)
            this.state={
                taskName:this.props.editTodoData.taskName ? this.props.editTodoData.taskName:"",
                taskDate:this.props.editTodoData.taskDate ? this.props.editTodoData.taskDate:"",
            }
        }
    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        const todoId=this.props.match.params.id;
        this.setState({taskName:'',taskDate:''});
        this.props.editTodoItems(todoId,this.state);
        this.props.history.push('/');
    }
    render() {
        return (
            <React.Fragment>
                <div className="container my-5 mx-auto">
                        <div className="row">
                            <div className="col-6 div-center">
                                <div className="cart">
                                    <h5 className="card-header">Edit Todo</h5>
                                </div>
                                <div className="card-body">
                                    <div className="field px-3 my-3">
                                        <div className="control has-icons-left">
                                                <input type="text" className="input" name="taskName" placeholder="Task Name*"
                                                onChange={this.onInputChange}
                                                value={this.state.taskName}
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                        </div>
                                    </div>

                                    <div className="field px-3 my-4">
                                        <div className="control has-icons-left">
                                                <input type="date" className="input" name="taskDate" placeholder="Task Date*"
                                                onChange={this.onInputChange}
                                                value={this.state.taskDate}
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-calendar-alt"></i>
                                                </span>
                                        </div>
                                    </div>

                                    <div className="field text-center mb-3">
                                        <Link className="btn btn-info mx-2"
                                            onClick={this.onFormSubmit}
                                            >ADD TODO</Link>

                                        <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state, todoProps)=>{
return{
    editTodoData:state.todo.find(eData =>eData.id === todoProps.match.params.id)
}
}

export default connect(mapStateToProps,{editTodoItems})(TodoListEdit);