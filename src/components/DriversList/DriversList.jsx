import { useEffect, useState } from "react";
import XMLParser from 'react-xml-parser';
import monFlag from '../../assets/flags/mon.png';
import itaFlag from '../../assets/flags/ita.png';
import gbrFlag from '../../assets/flags/gbr.png';
import gerFlag from '../../assets/flags/ger.png';
import fraFlag from '../../assets/flags/fra.png';
import espFlag from '../../assets/flags/esp.png';
import nedFlag from '../../assets/flags/ned.png';
import usaFlag from '../../assets/flags/usa.png';
import mexFlag from '../../assets/flags/mex.png';
import canFlag from '../../assets/flags/can.png';
import jpnFlag from '../../assets/flags/jpn.png';
import chnFlag from '../../assets/flags/chn.png';
import ausFlag from '../../assets/flags/aus.png';
import thaFlag from '../../assets/flags/tha.png';
import finFlag from '../../assets/flags/fin.png';
import nzlFlag from '../../assets/flags/nzl.png';
import denFlag from '../../assets/flags/den.png';
import brazilianFlag from '../../assets/flags/brazilian.png';
import argentinianFlag from '../../assets/flags/argentinian.png';
import polishFlag from '../../assets/flags/polish.png';
import russianFlag from '../../assets/flags/russian.png';

function DriversList({ year }) {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const flags = {
        "Italian": itaFlag,
        "British": gbrFlag,
        "German": gerFlag,
        "French": fraFlag,
        "Spanish": espFlag,
        "Monegasque": monFlag,
        "Dutch": nedFlag,
        "American": usaFlag,
        "Mexican": mexFlag,
        "Canadian": canFlag,
        "Japanese": jpnFlag,
        "Chinese": chnFlag,
        "Australian": ausFlag,
        "Thai": thaFlag,
        "Finnish": finFlag,
        "New Zealander": nzlFlag,
        "Danish": denFlag,
        "Polish": polishFlag,
        "Russian": russianFlag,
        "Brazilian": brazilianFlag,
        "Argentinian":argentinianFlag,
        };

    // useEffect(() => {
    //     const requestOptions = {
    //         method: "GET",
    //         redirect: "follow"
    //     };

    //     fetch(`http://ergast.com/api/f1/${year}/driverStandings`, requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             const parser = new XMLParser();
    //             const parsedXML = parser.parseFromString(result);
    //             const standingsList = parsedXML.getElementsByTagName('DriverStanding');
    //             const driversData = Array.from(standingsList).map(standing, index) => ({
    //                 const driverId = standing.getElementsByTagName("driverId")[0]?.value,
    //                 givenName: standing.getElementsByTagName('GivenName')[0].value,
    //                 familyName: standing.getElementsByTagName('FamilyName')[0].value,
    //                 nationality: standing.getElementsByTagName('Nationality')[0].value,
    //                 constructor: standing.getElementsByTagName('Constructor')[0].getElementsByTagName('Name')[0].value,
    //                 points: standing.attributes.points,

    //                 return {
    //                     id: constructorId || `N/A-${index}`,
    //                     name: givenName || "Unknown",
    //                     surname: familyName|| "Unknown",
    //                     nationality: nationality || "Unknown",
    //                     constructor: constructor || "Unknown",
    //                     points: points || "0",
    //                     wins: wins || "0",
    //                 };
    //             }),
    //             setDrivers(driversData);
    //             setLoading(faulse);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setError("Failed to fetch data");
    //             setLoading(false);
    //         });
    // }, [year]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
    
        fetch(`http://ergast.com/api/f1/${year}/driverStandings`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const parser = new XMLParser();
                const parsedXML = parser.parseFromString(result);
                const standingsList = parsedXML.getElementsByTagName('DriverStanding');
                const driversData = Array.from(standingsList).map((standing, index) => {
                    const driverId = standing.getElementsByTagName("driverId")[0]?.value;
                    const givenName = standing.getElementsByTagName('GivenName')[0]?.value;
                    const familyName = standing.getElementsByTagName('FamilyName')[0]?.value;
                    const nationality = standing.getElementsByTagName('Nationality')[0]?.value;
                    const constructor = standing.getElementsByTagName('Constructor')[0].getElementsByTagName('Name')[0]?.value;
                    const points = standing.attributes?.points;
                    const wins = standing.attributes?.wins;
    
                    return {
                        id: driverId || `N/A-${index}`,
                        name: givenName || "Unknown",
                        surname: familyName || "Unknown",
                        nationality: nationality || "Unknown",
                        constructor: constructor || "Unknown",
                        points: points || "0",
                        wins: wins || "0",
                    };
                });
                setDrivers(driversData);
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
                {drivers.map((driver, index) => (
                    <li key={index} className="flex justify-between p-[0.16rem] m-[0.1rem] bg-white">
                        <img src={flags[driver.nationality]} alt={driver.nationality} width="25" className="mr-4"/>
                        <h2 className="w-40">{driver.name} {driver.surname}</h2>
                        <p className="w-36 text-end">{driver.constructor}</p>
                        <p className="w-10 text-end">{driver.points}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DriversList;
