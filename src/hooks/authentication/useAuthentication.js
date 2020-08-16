import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';

const authenticationStateAtom = atom({
  key: 'authenticationState',
  default: { isAuthenticated: false },
});

const useAuthentication = () => {
  const [authenticationState, setAuthenticationState] = useRecoilState(authenticationStateAtom);
  useEffect(() => {
    if (authenticationState && !authenticationState.user) {
      const localStorageAuth = JSON.parse(localStorage.getItem('youTimeUser'));
      if (localStorageAuth) {
        setAuthenticationState({
          username: localStorageAuth.username,
          ytToken: localStorageAuth.ytToken,
          isAuthenticated: true,
        });
      }
    }
  }, []);

  const login = (username, ytToken) => {
    setAuthenticationState({ username, ytToken, isAuthenticated: true });
    localStorage.setItem('youTimeUser', JSON.stringify({ username, ytToken }));
  };

  const logout = () => {
    setAuthenticationState(undefined);
    localStorage.removeItem('youTimeUser');
  };

  return {
    user: authenticationState
      && { username: authenticationState.username, ytToken: authenticationState.ytToken },
    login,
    logout,
    isAuthenticated: authenticationState && authenticationState.isAuthenticated,
  };
};

export default useAuthentication;
