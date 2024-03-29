import { getStorage, ref } from 'firebase/storage';
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  increment
} from 'firebase/firestore/lite';

import db from './config';

export const getPostsApi = async () => {
  try {
    const res = await getDocs(
      query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    );

    return res.docs.map((v) => ({ ...v.data(), postId: v.id }));
  } catch (e) {
    console.log(e);
  }
};

export const deletePostApi = async (postId) => {
  try {
    await deleteDoc(doc(db, 'posts', postId));
  } catch (e) {
    console.log(e);
  }
};

export const updatePostViewApi = async (postId) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, { views: increment(1) });
  } catch (e) {
    console.log(e);
  }
};

export const updatePostPhoto = async (postId, photo) => {
  try {
    await updateDoc(doc(db, 'posts', postId), {
      photo
    });
  } catch (e) {
    console.log(e);
  }
};

export const updatePostCommentLen = async (postId, type) => {
  try {
    await updateDoc(doc(db, 'posts', postId), {
      comments: increment(type === 'increment' ? 1 : -1)
    });
  } catch (e) {
    console.log(e);
  }
};

export const updatePostLikesApi = async (postId) => {
  try {
    await updateDoc(doc(db, 'posts', postId), {
      likes: increment(1)
    });
  } catch (e) {
    console.log(e);
  }
};

export const addPostApi = async (newPost) => {
  const doc = await addDoc(collection(db, 'posts'), newPost);
  return doc.id;
};

export const updatePostApi = async (postId, newPost) => {
  delete newPost.photo;
  try {
    await updateDoc(doc(db, 'posts', postId), newPost);
  } catch (e) {
    console.log(e);
  }
};

export const storage = getStorage();
export const storageRef = ref();
