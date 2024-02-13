import { collection, addDocs, query } from 'firebase/firestore/lite';

import db from './config';

export const addUsersApi = async () => {
  const res = await addDocs(query(collection(db, 'users')));
  return res.docs.map((user) => user.loginToken);
};
