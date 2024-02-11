import defaultAvatar from '../../components/assets/defaultAvatar.png';

// 1. 액션 타입을 정한다. 이름은 비슷하게
const POST_DATA = 'user/POST_DATA';

// 2. 여기서 액션 객체 생성 함수를 만든다.
// 여기 있는 데이터는 다 action. 으로 꺼내서 쓴다.
export const postUserData = (user) => ({
  type: POST_DATA,
  user
});

// 번외. 데이터 칼럼 맘에 안들면 여기서 수정
const initialState = {
  users: [
    {
      userId: 1,
      email: 'aaaa@gmail.com',
      nono: 'aaaa1111',
      nickname: 'sdfsdf',
      image: defaultAvatar
    },
    {
      userId: 2,
      email: 'bbbb@naver.com',
      nono: 'bbbb2222',
      nickname: 'abcde',
      image: defaultAvatar
    }
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    // 3. 여기 와서 action을 추가한다. 대신 데이터의 불변성을 유지한다.
    default:
      return state;
  }
};

export default userReducer;
