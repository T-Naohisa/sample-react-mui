import { CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  /**
   * useAuthはundefinedの場合errorオブジェクトを返すので、
   * resultを確認し、errorの場合はエラー画面を表示する
   * そうでない場合はlogin関数を取得して、ログイン処理を行う
   */
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h4">ホーム画面</Typography>

      {/* 縦3列、横4列でカードを並べる */}
      <Stack spacing={3} direction="row" flexWrap="wrap" justifyContent="center">
        <Card>
          <CardContent>
            <Typography variant="h5">カード1</Typography>
            <Typography variant="body1">Containerのサンプル</Typography>
          </CardContent>
          <Stack justifyContent={"flex-end"}>
            <CardActions>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/container-sample");
                }}
              >
                遷移
              </Button>
            </CardActions>
          </Stack>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">カード2</Typography>
            <Typography variant="body1">Stackのサンプル</Typography>
          </CardContent>
          <Stack justifyContent={"center"}>
            <CardActions>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/stack-sample");
                }}
              >
                遷移
              </Button>
            </CardActions>
          </Stack>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">カード1</Typography>
            <Typography variant="body1">Containerのサンプル</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/container-sample");
              }}
            >
              遷移
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="center">
        <div>test4</div>
        <div>test5</div>
        <div>test6</div>
      </Stack>
      <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="center">
        <div>test7</div>
        <div>test8</div>
        <div>test9</div>
      </Stack>
    </div>
  );
};
