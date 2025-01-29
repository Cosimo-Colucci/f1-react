import React from "react";
import { useLocation } from 'react-router-dom';

const TeamCard= () =>{
    const location = useLocation();
    const { team } = location.state;
    return (
        <>
        </>
    )
}
export default TeamCard;