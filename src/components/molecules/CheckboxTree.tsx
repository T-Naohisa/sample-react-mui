import { useState } from "react";
import { CheckboxLabel } from "./CheckboxLabel";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import type { TreeProps } from "./TreeDrawer";

/**
 * 引数の定義
 */
export const CheckboxTree = ({ data }: { data: TreeProps[] }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleCheck = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedIds((prev) => [...prev, id]); // 追加
    } else {
      setCheckedIds((prev) => prev.filter((item) => item !== id)); // 削除
    }
    console.log("ids:" + checkedIds);
  };

  const renderTreeItems = (nodes: TreeProps[]) => {
    return nodes.map((node) => (
      <TreeItem
        key={node.id}
        itemId={node.id}
        label={
          <CheckboxLabel
            label={node.label}
            checked={checkedIds.includes(node.id)}
            onChange={(checked) => {
              handleCheck(node.id, checked);
            }}
          />
        }
      >
        {/* 子要素 */}
        {node.children && renderTreeItems(node.children)}
      </TreeItem>
    ));
  };

  return (
    <>
      <SimpleTreeView>{renderTreeItems(data)}</SimpleTreeView>
    </>
  );
};
