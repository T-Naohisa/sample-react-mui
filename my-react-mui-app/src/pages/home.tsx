import { Container, Paper, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";
export const Home = () => {
  /**
   * useAuthはundefinedの場合errorオブジェクトを返すので、
   * resultを確認し、errorの場合はエラー画面を表示する
   * そうでない場合はlogin関数を取得して、ログイン処理を行う
   */
  const authResult = useAuth();
  if (authResult)
    if ("id" in authResult) {
      return <div>Error</div>;
    }
  const { login } = authResult;
  const DEFAULT_USER = { id: "001", name: "テストユーザー" };

  const loginHandler = () => {
    login(DEFAULT_USER.id, DEFAULT_USER.name);
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
