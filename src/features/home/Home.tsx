import { CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../../components/molecules/HomeCard";
export const Home = () => {
  /**
   * useAuthはundefinedの場合errorオブジェクトを返すので、
   * resultを確認し、errorの場合はエラー画面を表示する
   * そうでない場合はlogin関数を取得して、ログイン処理を行う
   */
  const navigate = useNavigate();
  const urlNavi = (url: string) => {
    navigate(url);
  };
  return (
    <>
      <Typography variant="h4">ホーム画面</Typography>

      {/* 縦3列、横4列でカードを並べる */}
      <Stack spacing={3}>
        <Stack spacing={3} direction="row" flexWrap="wrap" justifyContent="center">
          <HomeCard
            title="カード1"
            description="Containerのサンプル"
            onClick={() => urlNavi("/container-sample")}
          />
          <HomeCard
            title="カード2"
            description="Stackのサンプル"
            onClick={() => urlNavi("/stack-sample")}
          />
          <HomeCard
            title="カード3"
            description="drawerのサンプル"
            onClick={() => urlNavi("/drawer-sample")}
          />
          <HomeCard
            title="カード4"
            description="xxxのサンプル"
            onClick={() => urlNavi("/container-sample")}
          />
        </Stack>
      </Stack>
    </>
  );
};
