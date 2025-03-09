import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div >
      <NavBar></NavBar>
      <Outlet ></Outlet>
    </div>
  );
};

export default Layout;
