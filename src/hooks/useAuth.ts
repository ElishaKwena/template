// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface AuthUser {
  role: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
}

export const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Your authentication logic here
    const fetchUser = async () => {
      setIsLoading(true);
      // Simulate auth check
      setTimeout(() => {
        setUser({ role: 'user' }); // Replace with actual auth logic
        setIsLoading(false);
      }, 1000);
    };

    fetchUser();
  }, []);

  return { user, isLoading };
};