import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type InputTypes = {
  placeholder: string;
  clearBackground?: boolean;
  password?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  rows?: number;
  customIcon?: JSX.Element | null;
  value?: string;
  // onChange: (value: string) => void;
};

const InputField = ({
  value,
  // onChange,
  placeholder,
  clearBackground,
  password = false,
  multiline = false,
  disabled = false,
  rows = 1,
  customIcon = null,
}: InputTypes) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <TextField
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        hiddenLabel
        variant="outlined"
        fullWidth
        className="text_field"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: 15,
          border: "1px solid #E7E7E7",
        }}
        multiline={multiline}
        disabled={disabled}
        rows={rows}
        placeholder={placeholder}
        type={!showPassword ? "text" : "password"}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment className="eye_btn" position="end">
              {password ? (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event: any) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ) : customIcon ? (
                customIcon
              ) : null}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default InputField;
