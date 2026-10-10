import { Container, Typography } from '@mui/material';

/**
 * MUIのコンテナーを使用した場合のサンプル画面
 * @returns
 */
export const ContainerSample = () => {
  return (
    <>
      <Typography variant="h2">コンテナサンプル</Typography>
      <Container
        sx={{
          height: '250px',
          width: '250px',
          backgroundColor: 'primary.main',
          color: 'primary.main',
        }}
      >
        <Typography variant="body1">コンテナ内のテキスト</Typography>
      </Container>
    </>
  );
};
