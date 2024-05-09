import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "./Alert";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
