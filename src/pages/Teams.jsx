import React from "react";
import { useOutletContext } from 'react-router-dom';
import TeamCardList from "../components/TeamCardList/TeamCardList";

const Teams = () => {
    const { year } = useOutletContext();
    
    return (
        <TeamCardList year={year}/>
    );
    }
export default Teams;