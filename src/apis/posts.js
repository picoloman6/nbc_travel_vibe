import { getStorage, ref } from 'firebase/storage';
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  orderBy,
  query
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

export const postDummy = async (newPost) => {
  await addDoc(collection(db, 'posts'), newPost);
};

export const deletePostApi = async (postId) => {
  try {
    await deleteDoc(doc(db, 'posts', postId));
  } catch (e) {
    console.log(e);
  }
};

export const storage = getStorage();
export const storageRef = ref();
