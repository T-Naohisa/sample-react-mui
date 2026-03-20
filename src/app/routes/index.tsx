import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../../features/home/index';
import { LoginPage } from '../../features/login/index';
import { ContainerSample } from '../../features/sample/components/container-sample/index';
import { DrawerSample } from '../../features/sample/components/drawer-sample/index';
import { StackSample } from '../../features/sample/components/stack-sample/index';
import { AuthGuard } from './guard';

/**
 * アプリのルーティング設定
 * 認証後に画面にアクセスできる仕組みにしたいため、メインの画面は
 * AuthGuardで囲む
 */
export const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      {/* ログイン後でないと表示できないページ群 */}
      <Route element={<AuthGuard />}>
        <Route path='/' element={<Home />} />
        <Route path='/container-sample' element={<ContainerSample />} />
        <Route path='/stack-sample' element={<StackSample />} />
        <Route path='/drawer-sample' element={<DrawerSample />} />
      </Route>

      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};
