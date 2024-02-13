const GET_DATA = 'comment/GET_DATA';
const POST_DATA = 'comment/POST_DATA';

export const getCommentData = (comments) => ({
  type: GET_DATA,
  payload: comments
});

export const postCommentData = (comment) => ({
  type: POST_DATA,
  payload: comment
});

const initialState = {
  comments: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        comments: action.payload
      };
    case POST_DATA:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
};

export default commentReducer;
