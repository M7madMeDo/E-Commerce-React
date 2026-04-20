import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
