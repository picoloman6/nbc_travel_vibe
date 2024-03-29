import {
  setDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
  updateDoc
} from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import db from '../apis/config';
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

export const getUsersApi = async (email) => {
  try {
    const usersRef = query(
      collection(db, 'users'),
      where('email', '==', email)
    );
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map((doc) => ({
      ...doc.data()
    }));

    return users[0];
  } catch (error) {
    console.error('Error getting users data:', error);
    throw error;
  }
};

export const updateUserInfoApi = async (userId, nickname) => {
  try {
    await updateDoc(doc(db, 'users', userId), { nickname });
  } catch (error) {
    console.error(error);
  }
};
