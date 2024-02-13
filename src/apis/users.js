import { setDoc, doc, getDocs, collection } from 'firebase/firestore';
import db from '../apis/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../apis/config';

export const addUsersApi = async (email, firstPw, nickName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      firstPw
    );
    const uid = userCredential.user.uid;

    await setDoc(doc(db, 'users', uid), {
      nickname: nickName,
      email: email,
      image: '기본이미지'
    });

    return true;
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
};

export const getUsersApi = async () => {
  try {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);

    const users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return users;
  } catch (error) {
    console.error('사용자 데이터 가져오기 에러:', error);
    throw error;
  }
};
