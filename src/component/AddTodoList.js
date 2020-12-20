import React, { Component } from 'react'
import TodoListAddForm from './TodoListAddForm';
import {connect} from 'react-redux';
import { createTodo } from '../store/action/todoAction';

 class AddTodoList extends Component {

    onSubmit = (todo) => {
       this.props.statrAddTodo(todo)
       console.log(todo, 'todo added')
       this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <div className="container my-5 mx-auto">
                    <div className="row">
                        <div className="col-8">
                            <div className="cart">
                                <h5 className="card-header">Add Todo</h5>
                            </div>
                            <TodoListAddForm onSubmit = {this.onSubmit}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    statrAddTodo:(todo)=>dispatch(createTodo(todo))
})
export default connect(null,mapDispatchToProps)(AddTodoList);