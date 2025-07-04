import { Box, Typography, useTheme } from "@mui/material";
import lightFlight from "../../public/flights_nc_4.svg";
import darkFlight from "../../public/flights_nc_dark_theme_4.svg";

const TopImage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Box>
      <Box
        component="img"
        src={isDark ? darkFlight : lightFlight}
        alt={"alt"}
        sx={{
          width: "80vw",
          // height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Typography variant="h3" textAlign="center">
        Flights
      </Typography>
    </Box>
  );
};

export default TopImage;
