import firebase from '../../config/firebase';
import { UPDATE_STATUS } from '../type';

export const updateTodoStatus = (todo_Obj) => (dispatch, getState) => {
    console.log(todo_Obj, 'tgcgc')
        // console.log(getState().todo.todo.todo)

    if (todo_Obj.status === "Active") {
        var statusUpdate = firebase.database().ref(`todoDatas`);
        statusUpdate.child(`${todo_Obj.id}`).update({
            status: "Completed"
        })

    } else {
        var statusUpdateOne = firebase.database().ref(`todoDatas`);
        statusUpdateOne.child(`${todo_Obj.id}`).update({
            status: "Active"
        })
    }


    // const todoFilter = getState().todo.todo.todo.slice().filter(
    //         item => {
    //             if (item.id === todoId && item.status === "Active") {
    //                 //console.log("items")
    //                 var statusUpdate = firebase.database().ref(`todoDatas`);
    //                 statusUpdate.child(`${todoId}`).update({
    //                         status: "Completed"
    //                     })
    //                     .then(res => {
    //                         console.log(res, "response")
    //                     })
    //                     .catch(error => {
    //                         console.log(error, "error")
    //                     })
    //             } else if (item.id === todoId && item.status === "Completed") {
    //                 //console.log("completed")
    //                 var statusUpdateOne = firebase.database().ref(`todoDatas`);
    //                 statusUpdateOne.child(`${todoId}`).update({
    //                         status: "Active"
    //                     })
    //                     .then(res => {
    //                         console.log(res, "response");
    //                     })
    //                     .catch(error => { console.log(error, "error") })
    //             }
    //         }
    //     )
    // var statusUpdate = firebase.database().ref(`todoDatas`);

    //statusUpdate.child(`${todoId}`).update({
    // if (status = "Active") {
    // status = "Completed"
    // } else {
    //     status = "Active"
    // }
    // { status = "Active" ? status = "Completed" : status = "Active" }
    //})
}