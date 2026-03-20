import { Checkbox, FormControlLabel } from '@mui/material';

/**
 * 引数の定義
 */
export type CheckboxLabelProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

/**
 * ラベル付きのチェックボックスのUIコンポーネント
 * @param param0
 * @returns
 */
export const CheckboxLabel = ({ label, checked, onChange }: CheckboxLabelProps) => {
  return (
    <>
      <FormControlLabel
        sx={{ width: '100px', margin: '0px' }}
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
          ></Checkbox>
        }
        label={label}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></FormControlLabel>
    </>
  );
};
