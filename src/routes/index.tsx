import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../features/features-common/Home";
import { LoginPage } from "../features/features-common/Login";
import { AuthGuard } from "./guard";
import { ContainerSample } from "../features/sample/ContainerSample";
import { StackSample } from "../features/sample/StackSample";
import { DrawerSample } from "../features/sample/DrawerSample";

/**
 * アプリのルーティング設定
 * 認証後に画面にアクセスできる仕組みにしたいため、メインの画面は
 * AuthGuardで囲む
 */
export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* ログイン後でないと表示できないページ群 */}
      <Route element={<AuthGuard />}>
        <Route path="/" element={<Home />} />
        <Route path="/container-sample" element={<ContainerSample />} />
        <Route path="/stack-sample" element={<StackSample />} />
        <Route path="/drawer-sample" element={<DrawerSample />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
