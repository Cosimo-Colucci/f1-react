import React from "react";
import { useLocation } from 'react-router-dom';
import TeamCard from "../components/TeamCard/TeamCard"; 

function TeamDetail () {
    const location = useLocation();
    const { team } = location.state;
    return(
        <TeamCard team={team}/>
    )
}
export default TeamDetail;