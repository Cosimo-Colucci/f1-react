import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/f1_logo.png";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Header = ({ setYear }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [year, stateYear] = useState(2024);

  const pageOptions = [
    {
      label: "Home",
      onClick: () => navigate("/"),
      isActive: location.pathname === "/",
    },
    {
      label: "Piloti",
      onClick: () => navigate("/drivers"),
      isActive: location.pathname === "/drivers",
    },
    {
      label: "Team",
      onClick: () => navigate("/teams"),
      isActive: location.pathname === "/teams",
    },
  ];

  const yearOptions = [
    {
      label: "2024",
      onClick: () => {
        stateYear(2024);
        setYear(2024);
      },
      isActive: year === 2024,
    },
    {
      label: "2023",
      onClick: () => {
        stateYear(2023);
        setYear(2023);
      },
      isActive: year === 2023,
    },
    {
      label: "2022",
      onClick: () => {
        stateYear(2022);
        setYear(2022);
      },
      isActive: year === 2022,
    },
    {
      label: "2021",
      onClick: () => {
        stateYear(2021);
        setYear(2021);
      },
      isActive: year === 2021,
    },
    {
      label: "2020",
      onClick: () => {
        stateYear(2020);
        setYear(2020);
      },
      isActive: year === 2020,
    },
  ];

  return (
    <div className="w-full bg-[#023e8a]">
      <div className="container mx-auto p-2 flex">
        <img src={Logo} alt="F1 logo" width={100} height={100} />
        <div className="ml-auto mr-4 flex">
          <Dropdown options={yearOptions} id="year-menu" menuLabel="Anno" />
          <Dropdown options={pageOptions} id="page-menu" menuLabel="Menù" />
        </div>
      </div>
    </div>
  );
};

export default Header;
