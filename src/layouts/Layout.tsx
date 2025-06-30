import { Container } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
