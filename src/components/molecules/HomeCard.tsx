import { CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

export type HomeCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export const HomeCard = (props: HomeCardProps) => {
  return (
    <>
      <Card>
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
      ;
    </>
  );
};
