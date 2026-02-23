import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login";
import { AuthGuard } from "./guard";
export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* ログイン後でないと表示できないページ群 */}
      <Route element={<AuthGuard />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
