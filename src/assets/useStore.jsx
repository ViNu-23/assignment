import { create } from 'zustand';

const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: !!localStorage.getItem('user'),
  showToast: false, 
  setUser: (user) => {
    set({ user, isLoggedIn: true, showToast: true }); 
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: null, isLoggedIn: false });
    // localStorage.removeItem('user');
  },
  hideToast: () => set({ showToast: false }), 
}));

export default useStore;
