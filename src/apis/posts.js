import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';

import db from './config';

export const getPostsApi = async () => {
  const res = await getDocs(
    query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  );
  return res.docs.map((v) => ({ ...v.data(), postId: v.id }));
};
