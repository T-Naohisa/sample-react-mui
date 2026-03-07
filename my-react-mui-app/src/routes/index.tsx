import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login";
import { AuthGuard } from "./guard";
import { ContainerSample } from "../pages/containerSample";
import { StackSample } from "../pages/stackSample";
export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* ログイン後でないと表示できないページ群 */}
      <Route element={<AuthGuard />}>
        <Route path="/" element={<Home />} />
        <Route path="/container-sample" element={<ContainerSample />} />
        <Route path="/stack-sample" element={<StackSample />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
