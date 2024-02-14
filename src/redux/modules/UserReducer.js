const POST_DATA = 'user/POST_DATA';
const UPDATE_USER_DATA = 'user/UPDATE_USER_DATA';

export const postUserData = (user) => ({
  type: POST_DATA,
  user
});

export const updateUserData = (updateUser) => ({
  type: UPDATE_USER_DATA,
  updateUser
});

const initialState = {
  accessToken: null,
  email: null,
  userId: null,
  image: null,
  nickname: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        ...action.user
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        ...action.updateUser
      };
    default:
      return state;
  }
};

export default userReducer;
