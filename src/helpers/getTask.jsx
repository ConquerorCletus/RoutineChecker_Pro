import { db, auth } from './firebase';
import { collection, query, where } from 'firebase/firestore';
// import {toast} from 'react-toastify';

const getTasksByUserId = () => {
  try {
    let userId = auth.currentUser?.uid;
    const tasksSnapshot = userId
      ? query(collection(db, 'tasks'), where('userId', '==', userId))
      : 0;

    const tasks = tasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return tasks;
  } catch (error) {
    console.log('Error fetching tasks:', error);
    throw error;
  }
};

export default getTasksByUserId;
