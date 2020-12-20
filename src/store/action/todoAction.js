import firebase from '../../config/firebase';
import { CREATE_TODO, SHOW_TODO, EDIT_TODO, DELETE_TODO, TODO_ERRORS, CLEAR_ERROR } from '../type';

export const createTodo = (todoData = {}) => {
    return (dispatch) => {
        const { taskName = '', taskDate = '', status = "Active" } = todoData;
        const todo = { taskName, taskDate, status }
        firebase.database().ref(`todoDatas`).push(todo).then((todoSuccess) => {

        });
    }
}

export const todoError = (taskName, taskDate) => (dispatch, getState) => {
    console.log(taskName, "taskName", taskDate);
    let errors = {};
    let formIsValid = true;
    if (!taskName || !taskDate) {

        formIsValid = false;
        errors = "All fields are mandatory";
        console.log("All fields are mandatory")
        dispatch({
            type: TODO_ERRORS,
            payload: errors
        })
        return false
    }
    if (typeof taskName !== "undefined") {
        if (!taskName.match(/^[a-zA-Z, ]+$/)) {
            formIsValid = false;
            errors = "Task name should be in letters only";
            console.log("Task name should be in letters only");
            dispatch({
                type: TODO_ERRORS,
                payload: errors
            })
            return false
        }

    }
    return true
}
export const todoClearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const showTodo = () => (dispatch) => {

    return firebase.database().ref("todoDatas").on('value', (snapshot) => {
        const todo = [];
        snapshot.forEach((childSnapshort) => {
            todo.push({
                id: childSnapshort.key,
                ...childSnapshort.val()
            });
        });
        dispatch({
            type: SHOW_TODO,
            payload: todo
        })
    })

}

export const removeTodoItems = (todoId) => (dispatch, getState) => {
    //console.log(todoId, "id")
    firebase.database().ref(`todoDatas/${todoId}`).remove()
        .catch((error) => {
            console.log(error, error)
        })
}

export const editTodoItems = (todoId, editTodoData) => (dispatch, getState) => {
    console.log(todoId, "id");
    console.log(editTodoData, "id");
    firebase.database().ref(`todoDatas/${todoId}`).update(editTodoData)
        .catch((error) => {
            console.log(error, error)
        })
}