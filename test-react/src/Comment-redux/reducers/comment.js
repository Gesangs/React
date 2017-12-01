const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export default (state, action) => {
    if(!state) {
        state: {comment: []}
    }

    switch(action.type) {
        case INIT_COMMENTS :
            return { comments: action.comments }
        case ADD_COMMENT :
            return { comments: [...state.comments, action.comments] }
        case DELETE_COMMENT :
            return { comments: [
                ...state.comments.slice(0, action.index),
                ...state.comments.slice(action.index + 1)
            ]}
        default :
            return state
    }
}

export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments }
  }
  
  export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment }
  }
  
  export const deleteComment = (commentIndex) => {
    return { type: DELETE_COMMENT, commentIndex }
  }