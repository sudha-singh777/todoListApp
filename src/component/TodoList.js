import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import TodoListItems from './TodoListItems';
import {showTodo} from '../store/action/todoAction';

class TodoList extends Component {
    constructor(props) {
        super(props)
            this.state={
                currentStatus:'',
                
            }
        }
    componentDidMount(){
        this.props.showTodo();
        //console.log(this.props,"todo");
    }
    handleDropdownChange = (e)=>{
         console.log(e.target.value,"target value")
         this.setState({ currentStatus: e.target.value });
        // console.log(this.state.selectValue,"selected value")
       // this.props.allTodoList = this.props.allTodoList.filter(todo => todo.status === e.target.value);

    }
    render(){
        const {allTodoList} = this.props;
       // console.log(allTodoList.todo,"date");
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="card">
                    <h5 className="card-header">Todo List</h5>
                    <div className="m-3">
                    <div className="row">
                        <div className="col-sm-8">
                       
                            <div className="form-group">
                                <select className="form-control" onChange={this.handleDropdownChange}> 
                                   <option value="">All Task</option> 
                                   <option value="Active">Active Task</option> 
                                   <option value="Completed">Completed Task</option> 
                               {/* {allTodoList ? allTodoList.todo.map(status=>(
                                    <option key={status.id} value={status.status}>{status.status}</option>
                               )):null}*/}
                               
                                
                                </select>
                            </div>
                       
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex flex-row-reverse">
                                <Link to="/todoAdd" className="btn btn-primary ">Add Todo</Link>
                            </div>
                        </div>
                    </div>
                              
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {(allTodoList.length>0) ? allTodoList.reverse().filter(filterObj=>(this.state.currentStatus !== ''? filterObj.status === this.state.currentStatus : filterObj)).map(todo=>(
                                    <TodoListItems {...todo} key={todo.id}/>
                                )):
                                    <tr><td className="notification is-success">nO DAta</td></tr>
                            }
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )  
    } 
}

const mapStateToProps = state=>{
    console.log(state,"state")
    return{
        allTodoList:state.todo
    }
}

export default connect(mapStateToProps,{showTodo})(TodoList);
