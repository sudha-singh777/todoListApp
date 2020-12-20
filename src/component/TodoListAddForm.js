import React, { Component } from 'react'
import { connect } from 'react-redux'
import {todoError,todoClearError} from '../store/action/todoAction';

 class TodoListAddForm extends Component {
    constructor(props) {
        super(props)
            this.state={
                taskName:'',
                taskDate:'',
                errors:'',
            }
        }
    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    checkValidation = () => {
        const { taskName, taskDate } = this.state;
        if(taskName && taskDate){
            return true;
        }
    }
        
    

    onFormSubmit = (e) => {
        console.log(e,"echeck")
        console.log(this.props,"props")
        e.preventDefault();
       if(this.checkValidation()){
        this.props.onSubmit({
            taskName:this.state.taskName,
            taskDate:this.state.taskDate
        })
        this.setState({ taskName: '',taskDate:'' }); 
        
    }else{
        const { taskName, taskDate } = this.state;
        this.props.todoError(taskName);
        setTimeout(this.props.todoClearError, 3000);
    }
    }
    render() {
        return (
            <React.Fragment>
                <div className="card-body">
                    <div className="field px-3 my-3">
                        
                            <label className="label">Task Name</label>
                        
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
                        <label className="label">Task Date</label>
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

                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="control">
                            {this.props.error && <p className="help is-danger">{this.props.error}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="field text-center mb-3">
                        <button className="btn btn-info"
                            onClick={this.onFormSubmit}>ADD TODO</button>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    
    return{
        error:state.todo.error
    }
} 

export default connect(mapStateToProps,{todoError,todoClearError})(TodoListAddForm);