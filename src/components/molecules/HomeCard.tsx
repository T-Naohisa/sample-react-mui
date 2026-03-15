import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
/**
 * 引数の定義
 */
export type HomeCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

/**
 * メイン画面に表示する各サンプル画面への遷移をさせるためのコンポーネント
 * @param props
 * @returns
 */
export const HomeCard = (props: HomeCardProps) => {
  return (
    <>
      <Card sx={{ width: 200, height: 150, display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="body1">{props.description}</Typography>
        </CardContent>

        <Stack justifyContent={"flex-end"}>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => {
                props.onClick();
              }}
            >
              遷移
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </>
  );
};
