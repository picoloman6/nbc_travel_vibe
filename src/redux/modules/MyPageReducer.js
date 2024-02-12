const MYPAGE_DATA = 'mypage/POST_DATA'

export const postMyPageData = (mypage) => ({
    type: MYPAGE_DATA,
    payload: mypage
});

const initialState = {
    mypages: [
        {
            userId: 1,
            email: 'sdkfjl',
            nono: 'sdfsd',
            nickname: 'sdfsdf',
            image: 'dddd',

        }
    ]
};

const myPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MYPAGE_DATA:
            return {
                ...state,
                mypages: [...state.mypages, action.payload]
            }
        default:
            return state;
    }
};

export default myPageReducer