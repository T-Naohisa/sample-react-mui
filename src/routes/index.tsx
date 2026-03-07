import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../features/home/Home";
import { LoginPage } from "../pages/Login";
import { AuthGuard } from "./guard";
import { ContainerSample } from "../features/container-sample/ContainerSample";
import { StackSample } from "../features/stack-sample/StackSample";
import { DrawerSample } from "../features/drawer-sample/DrawerSample";
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
