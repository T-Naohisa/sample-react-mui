import { Button, Drawer, Stack } from "@mui/material";
export type DrawerMoleculeProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
};

export const DrawerMolecule = ({
  isDrawerOpen,
  setIsDrawerOpen,
  children,
}: DrawerMoleculeProps & { children: React.ReactNode }) => {
  return (
    <>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div>ドロワーの内容</div>
        <Stack spacing={2} justifyContent="center" sx={{ width: "350px" }}>
          {children}
          <Button
            variant="contained"
            sx={{ width: "100px" }}
            onClick={() => setIsDrawerOpen(false)}
          >
            閉じる
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
