import {
  setDoc,
  doc,
  getDocs,
  collection,
  query
} from 'firebase/firestore/lite';
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
    console.log('uid:', uid, 'user:', userCredential.user);

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
    const usersRef = query(collection(db, 'users'));
    const snapshot = await getDocs(usersRef);

    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return users;
  } catch (error) {
    console.error('Error getting users data:', error);
    throw error;
  }
};
