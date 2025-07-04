import { Route, Routes } from "react-router";
// import Layout from "../layouts/layout";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
