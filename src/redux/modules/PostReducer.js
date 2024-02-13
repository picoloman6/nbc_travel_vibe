const GET_DATA = 'post/GET_DATA';
const POST_DATA = 'post/POST_DATA';
const PLUS_VIEW = 'post/PLUS_VIEW';

export const postGetData = (posts) => ({
  type: GET_DATA,
  payload: posts
});

export const postPostData = (post) => ({
  type: POST_DATA,
  payload: post
});

export const plusView = (view) => ({
  type: PLUS_VIEW,
  payload: view
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
    case PLUS_VIEW:
      const plusTargetId = action.payload;
      const plusedArticle = state.posts.map((item) => {
        if (item.postId === plusTargetId) {
          return { ...item, views: state.views + 1 };
        } else return item;
      });
      return {
        ...state,
        posts: plusedArticle
      };
    default:
      return state;
  }
};

export default postReducer;
