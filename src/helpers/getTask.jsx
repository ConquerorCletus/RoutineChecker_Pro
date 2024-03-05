import { db, auth } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const getTasksByUserId = async () => {
  try {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    const tasksQuery = query(
      collection(db, 'tasks'),
      where('userId', '==', userId)
    );
    const tasksSnapshot = await getDocs(tasksQuery);

    const tasks = tasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      completed: doc.data().completed, // Include the completed property
      ...doc.data(),
    }));

    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export default getTasksByUserId;
