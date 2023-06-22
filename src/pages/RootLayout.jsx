import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
