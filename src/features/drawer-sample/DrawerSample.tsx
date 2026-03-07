import Button from "@mui/material/Button";
import { useState } from "react";
import { DrawerMolecule } from "../../components/molecules/Drawer";
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
      <DrawerMolecule isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
        {/* 表示したい内容を入れる */}
        <></>
      </DrawerMolecule>
    </>
  );
};
