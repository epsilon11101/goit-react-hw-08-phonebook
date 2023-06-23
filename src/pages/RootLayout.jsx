import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
};

export default RootLayout;
