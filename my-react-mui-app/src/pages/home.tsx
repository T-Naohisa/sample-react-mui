import { Typography } from "@mui/material";
export const Home = () => {
  /**
   * useAuthはundefinedの場合errorオブジェクトを返すので、
   * resultを確認し、errorの場合はエラー画面を表示する
   * そうでない場合はlogin関数を取得して、ログイン処理を行う
   */
  return (
    <div>
      <Typography variant="h4">ホーム画面</Typography>
    </div>
  );
};
