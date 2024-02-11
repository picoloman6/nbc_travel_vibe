const POST_DATA = 'post/POST_DATA';
const SET_DATA = 'post/SET_DATA';

export const postSetData = (post) => ({
  type: SET_DATA,
  payload: post
});

export const postPostData = (post) => ({
  type: POST_DATA,
  payload: post
});

const initialState = {
  posts: [
    {
      postId: 1,
      category: 'relax',
      title: 'sdfsdf',
      content: 'sdfsdfsdfsdf',
      created_at: 1,
      likes: 2,
      userId: 1,
      photos:
        'https://i.namu.wiki/i/mmkvzpz0i0UFFKSrfyN5-jrvbiu5FWfhdFZLWnug67p1NcoISI3ql8wHLri5AalgIVcC6sRAVMUzLlST-KYh7g.webp'
    },
    {
      postId: 2,
      category: 'relax',
      title: '개빡친 치와와;',
      content: '자신있나???',
      created_at: 100000,
      likes: 3,
      userId: 2,
      photos:
        'https://i.namu.wiki/i/mmkvzpz0i0UFFKSrfyN5-jrvbiu5FWfhdFZLWnug67p1NcoISI3ql8wHLri5AalgIVcC6sRAVMUzLlST-KYh7g.webp'
    },
    {
      postId: 3,
      category: 'relax',
      title: 'sdfsdf',
      content: 'sdfsdfsdfsdf',
      created_at: 494841,
      likes: 20,
      userId: 3,
      photos:
        'https://i.namu.wiki/i/mmkvzpz0i0UFFKSrfyN5-jrvbiu5FWfhdFZLWnug67p1NcoISI3ql8wHLri5AalgIVcC6sRAVMUzLlST-KYh7g.webp'
    }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case SET_DATA:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postId === action.payload.postId ? action.payload : post
        )
      };
    default:
      return state;
  }
};

export default postReducer;
