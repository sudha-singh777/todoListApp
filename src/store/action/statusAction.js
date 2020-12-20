import firebase from '../../config/firebase';
import { UPDATE_STATUS } from '../type';

export const updateTodoStatus = (todo_Obj) => (dispatch, getState) => {
    console.log(todo_Obj, 'tgcgc')

    if (todo_Obj.status === "Active") {
        var statusUpdate = firebase.database().ref(`todoDatas`);
        statusUpdate.child(`${todo_Obj.id}`).update({
                status: "Completed"
            })
            .catch(error => {
                console.log(error, "error")
            })

    } else {
        var statusUpdateOne = firebase.database().ref(`todoDatas`);
        statusUpdateOne.child(`${todo_Obj.id}`).update({
                status: "Active"
            })
            .catch(error => {
                console.log(error, "error")
            })
    }
}