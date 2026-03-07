import { Stack } from "@mui/material";

export const StackSample = () => {
  return (
    <>
      <Stack spacing={5} sx={{ width: "500px" }}>
        {/* 左上 */}
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
        {/* 真ん中 */}
        <Stack spacing={2} direction="row" justifyContent="center">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
        {/* 右下 */}
        <Stack spacing={2} direction="row" justifyContent="flex-start">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
      </Stack>
      <Stack spacing={5} sx={{ width: "500px" }}>
        {/* 上 */}
        <Stack
          spacing={2}
          direction="row"
          alignItems={"flex-end"}
          sx={{ backgroundColor: "primary.main", height: "150px" }}
        >
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
        {/* 真ん中 */}
        <Stack
          spacing={2}
          direction="row"
          alignItems={"center"}
          sx={{ backgroundColor: "secondary.main", height: "150px" }}
        >
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
        {/* 下 */}
        <Stack
          spacing={2}
          direction="row"
          alignItems={"flex-start"}
          sx={{ backgroundColor: "primary.main", height: "150px" }}
        >
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </Stack>
      </Stack>
    </>
  );
};
