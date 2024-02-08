const POST_DATA = 'comment/POST_DATA';

export const postCommentData = (comment) => ({
  type: POST_DATA,
  payload: comment
});

const initialState = {
  comments: [
    {
      commentId: 1,
      content: 'sdkfjl',
      created_at: '1',
      userId: 2,
      postId: 1
    },
    {
      commentId: 2,
      content: 'sdkfjl',
      created_at: '1',
      userId: 1,
      postId: 2
    }
  ]
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
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
