import { Button, Drawer, Stack } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { CheckboxTree } from "./CheckboxTree";
export type DrawerMoleculeProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

// ツリーは再帰的な型定義にする
export type TreeProps = {
  id: string;
  label: string;
  children?: TreeProps[]; // 子要素は同じ型の配列
};

const dummyTreeData: TreeProps[] = [
  {
    id: "root",
    label: "すべての項目",
    children: [
      { id: "child1", label: "子要素 1", children: [{ id: "grandchild1", label: "孫要素 1" }] },
      { id: "child2", label: "子要素 2" },
    ],
  },
  { id: "child3", label: "子要素 3" },
  { id: "child4", label: "子要素 4" },
];

export const TreeDrawer = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMoleculeProps) => {
  const renderTreeItems = (nodes: TreeProps[]) => {
    return nodes.map((node) => (
      <TreeItem itemId={node.id} label={node.label}>
        {renderTreeItems(node.children || [])}
      </TreeItem>
    ));
  };

  // IDは選択中のものを配列で保持する
  return (
    <>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div>ドロワーの内容</div>
        <Stack spacing={2} justifyContent="center" sx={{ width: "350px" }}>
          {/* チェックボックスありのツリーを表示する */}
          <SimpleTreeView
            checkboxSelection // これでチェックボックスが出る
            multiSelect // 複数選択を可能にする
            // 選択状態が変わった時の処理（後でStateと繋ぐ）
            onSelectedItemsChange={(event, itemIds) => {
              console.log(event?.target); // クリックされたアイテムのID
              console.log("選択されたID:", itemIds);
            }}
          >
            {renderTreeItems(dummyTreeData)}
          </SimpleTreeView>
          <CheckboxTree data={dummyTreeData}></CheckboxTree>
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
