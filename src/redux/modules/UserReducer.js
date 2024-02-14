import defaultAvatar from '../../components/assets/defaultAvatar.png';

// 1. 액션 타입을 정한다. 이름은 비슷하게
const POST_DATA = 'user/POST_DATA';
const UPDATE_USER_DATA = 'user/UPDATE_USER_DATA';

// 2. 여기서 액션 객체 생성 함수를 만든다.
// 여기 있는 데이터는 다 action. 으로 꺼내서 쓴다.
export const postUserData = (user) => ({
  type: POST_DATA,
  user
});

//mypage 액션 객체 생성 함수
export const updateUserData = (updateUser) => ({
  type: UPDATE_USER_DATA,
  updateUser
});

// 번외. 데이터 칼럼 맘에 안들면 여기서 수정
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
    // 3. 여기 와서 action을 추가한다. 대신 데이터의 불변성을 유지한다.
    case UPDATE_USER_DATA:
      // const updateUser = action.updateUser;
      // const updateUsers = state.users.map((user) => {
      //   if (user.userId === updateUser.userId) {
      //     return updateUser;
      //   }
      //   return user;
      // });
      return {
        ...state,
        ...action.updateUser
      };
    default:
      return state;
  }
};

export default userReducer;
