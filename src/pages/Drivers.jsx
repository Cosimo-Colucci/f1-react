import React from "react";
import { useOutletContext } from 'react-router-dom';
import DriversCardList from "../components/DriverCardsList/DriverCardList";

const Drivers = () => {
    const { year } = useOutletContext();
    
    return (
        <div>
           <DriversCardList year={year}/>
        </div>
    );
    }
export default Drivers;