import { collection, getDocs, query, where } from 'firebase/firestore/lite';

import db from './config';

export const getCommentsApi = async (postId) => {
  const res = await getDocs(
    query(collection(db, 'comments'), where('postId', '==', postId))
  );

  return res.docs.map((v) => ({ ...v.data(), commentId: v.id }));
};
