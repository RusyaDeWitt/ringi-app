export function useAuth() {
  const isLoggedIn = !!localStorage.getItem('token');

  return { isLoggedIn };
}
