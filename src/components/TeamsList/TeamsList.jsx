// import React from "react";

// function TeamsList(){
//     return (
//         <div className="w-full md:w-1/3">
//             <h1>Teams List</h1>
//         </div>
//     );
// }
// export default TeamsList;
import { useEffect, useState } from "react";
import XMLParser from 'react-xml-parser';

import ferrariLogo from '../../assets/teams/ferrari.png';
import redbullLogo from '../../assets/teams/redbull.png';
import mclarenLogo from '../../assets/teams/mclaren.png';
import mercedesLogo from '../../assets/teams/mercedes.png';
import alpineLogo from '../../assets/teams/alpine.png';
import astonMartin from '../../assets/teams/aston_martin.png';
import hassLogo from '../../assets/teams/haas.png';
import stakeLogo from '../../assets/teams/stake.png';
import williamsLogo from '../../assets/teams/williams.png';
import RBLogo from '../../assets/teams/RB.png';

function TeamsList({ year }) {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const logos = {
        "Ferrari": ferrariLogo,
        "Red Bull": redbullLogo,
        "McLaren": mclarenLogo,
        "Mercedes": mercedesLogo,
        "Alpine F1 Team": alpineLogo,
        "Aston Martin": astonMartin,
        "Haas F1 Team": hassLogo,
        "Sauber": stakeLogo,
        "Williams": williamsLogo,
        "RB F1 Team": RBLogo,
    };

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`http://ergast.com/api/f1/${year}/constructorStandings`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const parser = new XMLParser();
                const parsedXML = parser.parseFromString(result);
                const standingsList = parsedXML.getElementsByTagName("ConstructorStanding");
                const teamsData = Array.from(standingsList).map((standing, index) => {
                    const constructorId = standing.getElementsByTagName("constructorId")[0]?.value;
                    const name = standing.getElementsByTagName("Name")[0]?.value;
                    const points = standing.attributes?.points;
                    const wins = standing.attributes?.wins;

                    return {
                        id: constructorId || `N/A-${index}`,
                        name: name || "Unknown",
                        points: points || "0",
                        wins: wins || "0",
                    };
                });
                setTeams(teamsData);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, [year]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-full md:w-1/3 p-1">
            <ul className="bg-[#023e8a] p-1">
                {teams.map((team, index) => (
                    <li key={index} className="flex justify-between p-[0.16rem] m-[0.1rem] bg-white">
                        <div className="flex">
                            <img src={logos[team.name]} alt={team.name} width="25" className="mr-4" />
                            <h2 className="w-36">{team.name}</h2>
                        </div>
                        <div>
                            <p className="w-10 text-end">{team.points}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamsList;
