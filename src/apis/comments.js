import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where
} from 'firebase/firestore/lite';

import db from './config';

export const getCommentsApi = async (postId) => {
  try {
    const res = await getDocs(
      query(collection(db, 'comments'), where('postId', '==', postId))
    );

    return res.docs.map((v) => ({ ...v.data(), commentId: v.id }));
  } catch (e) {
    console.log(e);
  }
};

export const postCommentApi = async (
  content,
  postId,
  userId,
  userNickname,
  userPhoto
) => {
  try {
    const dateTime = new Date().getTime();
    const comment = {
      content,
      createdAt: dateTime,
      postId,
      userId,
      userNickname,
      userPhoto
    };

    console.log(userPhoto);
    await addDoc(collection(db, 'comments'), comment);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCommentApi = async (commentId) => {
  try {
    await deleteDoc(doc(db, 'comments', commentId));
  } catch (e) {
    console.log(e);
  }
};
