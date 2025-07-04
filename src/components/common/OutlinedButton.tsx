import { Delete } from "@mui/icons-material";
import { Button, useTheme, type ButtonProps } from "@mui/material";
import type React from "react";

type ButtonPropsType = ButtonProps & {
  children: React.ReactNode;
  sx?: object;
};

const OutlinedButton: React.FC<ButtonPropsType> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Button
      variant="outlined"
      startIcon={<Delete />}
      {...rest}
      sx={{
        borderRadius: 6,
        my: 2,
        color: isDark ? "white" : "black",
        borderColor: isDark ? "white" : "black",
        "&:hover": {
          backgroundColor: isDark
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)",
          borderColor: isDark ? "white" : "black",
        },
        ...sx,
      }}
    >
      {/* {page} */}
      {children}
    </Button>
  );
};

export default OutlinedButton;
