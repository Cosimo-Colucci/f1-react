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

function TeamCardList({year}) {
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
        <div className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teams.map((team) => (
                    <div
                        key={team.id}
                        className="bg-white p-4 rounded shadow-md cursor-pointer flex justify-between hover:bg-gray-100 hover:shadow-lg"
                    >
                        <div>
                            <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                {team.name}
                            </h2>
                            <p className="text-sm">Points: {team.points}</p>
                            <p className="text-sm">Wins: {team.wins}</p>
                        </div>
                        <div className=" my-auto">
                            <img 
                                src={logos[team.name]} 
                                alt={team.name} 
                                width={90} 
                                className=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamCardList;
