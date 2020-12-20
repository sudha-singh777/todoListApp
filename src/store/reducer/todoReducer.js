import { CREATE_TODO, SHOW_TODO, EDIT_TODO, DELETE_TODO, TODO_ERRORS, CLEAR_ERROR } from '../type';

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return {...state, todo: action.payload }

        case TODO_ERRORS:
            return {...state, error: action.payload }

        case CLEAR_ERROR:
            return {...state, error: '' }

        case SHOW_TODO:
            return action.payload

        default:
            return state;
    }

}
export default todoReducer;