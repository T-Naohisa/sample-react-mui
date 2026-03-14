import { Container, Paper, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * アプリ共通のログイン画面
 * アクセス時に必ず最初に表示する
 * @returns
 */
export const LoginPage = () => {
  const authResult = useAuth();
  if ("id" in authResult) {
    return <div>Error</div>;
  }
  const { login } = authResult;
  const navigate = useNavigate();

  const loginHandler = () => {
    login("001", "テストユーザー");
    navigate("/");
  };

  return (
    <div>
      {/* smは600px */}
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8, textAlign: "center" }}>
          <Stack spacing={2} sx={{ justifyContent: "center" }}>
            <Typography>ログイン</Typography>
            <Button
              // variantは塗りつぶし
              variant="contained"
              color="primary"
              onClick={() => {
                loginHandler();
                console.log("onclick");
              }}
            >
              {" "}
              ログインする
            </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};
