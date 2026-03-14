import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
export type CheckboxLabelProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const CheckboxLabel = ({ label, checked, onChange }: CheckboxLabelProps) => {
  return (
    <>
      <FormControlLabel
        sx={{ width: "100px", margin: "0px" }}
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
