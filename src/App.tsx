import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./contexts/AuthContext";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6ebad3", // メインカラー
      contrastText: "#ffffff", // テキストカラー
    },
    secondary: {
      main: "#e69b56", // セカンダリーカラー
    },
    background: {
      default: "#f0f4f7", // 背景色
      paper: "#ffffff", // 紙の色（カードやモーダルの背景色など）
    },
    text: {
      primary: "#2c3e50", // 主要なテキストカラー
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* ログイン情報を使いまわせるようにする */}
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
