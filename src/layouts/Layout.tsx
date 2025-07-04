import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: theme.palette.mode === "dark" ? "#202124" : "#f5f5f5",
          color: theme.palette.text.primary,
        }}
      >
        <Header />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Layout;
