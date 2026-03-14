import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUser } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for mocked session
    const storedUser = localStorage.getItem('friends-florist-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mocking an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockUser.email && password === 'password') {
          setUser(mockUser);
          localStorage.setItem('friends-florist-user', JSON.stringify(mockUser));
          resolve(mockUser);
        } else if (email === 'editor' && password === 'editor') {
          // Allow simplified login with just 'editor' for username or editor@admin.com
          import('../data/mockData').then(({ mockAdmin }) => {
            setUser(mockAdmin);
            localStorage.setItem('friends-florist-user', JSON.stringify(mockAdmin));
            resolve(mockAdmin);
          });
        } else if (email === 'editor@admin.com' && password === 'editor') {
          import('../data/mockData').then(({ mockAdmin }) => {
            setUser(mockAdmin);
            localStorage.setItem('friends-florist-user', JSON.stringify(mockAdmin));
            resolve(mockAdmin);
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('friends-florist-user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
