import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

/**
 * ユーザー認証をおこなう
 */
export const AuthGuard = () => {
  const authResult = useAuth();
  console.log('AuthGuard', authResult);
  if ('id' in authResult) {
    return <div>Error</div>;
  }
  const { user } = authResult;
  console.log('AuthGuard', user);
  if (!user) {
    // replaceで遷移履歴を残さないようにする
    return <Navigate to='/login' replace />;
  }
  // userが存在する場合は子コンポーネントを返却する
  return <Outlet />;
};
