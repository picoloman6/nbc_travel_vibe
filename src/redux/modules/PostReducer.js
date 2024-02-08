const POST_DATA = 'post/POST_DATA';

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
      userId: 1
    },
    {
      postId: 2,
      category: 'relax',
      title: 'sdfsdf',
      content: 'sdfsdfsdfsdf',
      created_at: 100000,
      likes: 3,
      userId: 2
    },
    {
      postId: 3,
      category: 'relax',
      title: 'sdfsdf',
      content: 'sdfsdfsdfsdf',
      created_at: 494841,
      likes: 20,
      userId: 1
    }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        users: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};

export default postReducer;
