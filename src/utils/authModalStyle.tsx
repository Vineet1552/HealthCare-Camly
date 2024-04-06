import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const generateResponsiveStyle = () => {
  //   const theme = useTheme();
  //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust the breakpoint as needed

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    margin:10,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    borderRadius: 3,
    outline: "none",
  };
};