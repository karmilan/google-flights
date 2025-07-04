import { Box, Button, useTheme } from "@mui/material";

import darkExplore from "../../public/explorer-dark.jpeg";
import lightExplore from "../../public/explorer-light.jpeg";

const ExploreImage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Box position="relative">
      <Box
        component="img"
        src={isDark ? darkExplore : lightExplore}
        alt={"alt"}
        sx={{
          width: "80vw",
          // height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          bottom: "50%",
          right: "45%",
          borderRadius: "24px",
        }}
        // startIcon={<Search />}
      >
        Explore Destinations
      </Button>
    </Box>
  );
};

export default ExploreImage;
