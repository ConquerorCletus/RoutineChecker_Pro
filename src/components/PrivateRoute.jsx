import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    // Clean up
    return () => unsubscribe();
  }, []);

  // Check for loading
  if (loading) {
    return <Spinner />;
  }

  return isAuthenticated
    ? children
    : // Using Next.js router for navigation
      router.push('/login');
};

export default PrivateRoute;
