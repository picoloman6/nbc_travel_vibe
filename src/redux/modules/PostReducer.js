const GET_DATA = 'post/GET_DATA';
const POST_DATA = 'post/POST_DATA';

export const postGetData = (posts) => ({
  type: GET_DATA,
  payload: posts
});

export const postPostData = (post) => ({
  type: POST_DATA,
  payload: post
});

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        posts: action.payload
      };
    case POST_DATA:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};

export default postReducer;
