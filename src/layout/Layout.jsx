import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Layout = () => {
  const [year, setYear] = useState(2024);

  return (
    <div className="h-screen flex flex-col">
      <div className="">
        <Header setYear={setYear} />
      </div>

      <div className="container mx-auto p-[0.15rem] flex-1 overflow-y-auto">
        <Outlet context={{ year }} />
      </div>

      <div className="">
        <Footer />
      </div>     
    </div>
  );
};

export default Layout;

