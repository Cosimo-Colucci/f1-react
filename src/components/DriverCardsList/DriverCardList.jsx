import React, { useEffect, useState } from "react";
import XMLParser from 'react-xml-parser';
import { useNavigate } from "react-router-dom";

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


function DriversCardList({ year }) {
    const [drivers, setDrivers] = useState([]);
    const navigate = useNavigate();
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
                const driversData = standingsList.map(standing => ({  
                    givenName: standing.getElementsByTagName('GivenName')[0].value,
                    familyName: standing.getElementsByTagName('FamilyName')[0].value,
                    nationality: standing.getElementsByTagName('Nationality')[0].value,
                    constructor: standing.getElementsByTagName('Constructor')[0].getElementsByTagName('Name')[0].value,
                    points: standing.attributes.points,
                    wins: standing.attributes.wins,
                }));
                setDrivers(driversData);
            })
            .catch((error) => console.error(error));
    }, [year]);

    const handleDriverClick = (driver) => {
        navigate(`/drivers/${driver.familyName}`, { state: { driver } });
    };
    
    return (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drivers.map((driver) => (
              <div
                key={driver.name_acronym}
                className="bg-white p-4 rounded shadow-md cursor-pointer flex justify-between hover:bg-gray-100 hover:shadow-lg"
                onClick={() => handleDriverClick(driver)}
              >
                <div>
                  <img src={flags[driver.nationality]} alt={driver.nationality}  width={25} />
                  <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {driver.givenName} {driver.familyName}
                  </h2>
                  <p className="text-sm">{driver.constructor}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-bold">{driver.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );}

export default DriversCardList;