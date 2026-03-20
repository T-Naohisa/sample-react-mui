import Button from "@mui/material/Button";
import { useState } from "react";
import { TreeDrawer } from "../../../../components/molecules/TreeDrawer";

/**
 * MUIドロワーを開くサンプル画面
 */
export const DrawerSample = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const openDrawer = () => {
    // ドロワーを開く処理
    setIsDrawerOpen(true);
  };
  return (
    <>
      <div>ドロワーサンプル</div>
      <Button variant="contained" onClick={openDrawer}>
        ドロワーを開く
      </Button>
      <TreeDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}></TreeDrawer>
    </>
  );
};
