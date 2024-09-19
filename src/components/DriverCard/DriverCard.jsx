import React from "react";
import { useLocation } from 'react-router-dom';

import PierreGasly from '../../assets/drivers/pierre_gasly.png';
import AlexanderAlbon from '../../assets/drivers/Alex_Albon.png';
import CarlosSainz from '../../assets/drivers/Carlos_Sainz.png';
import DanielRicciardo from '../../assets/drivers/Daniel_Ricciardo.png';
import CharlesLeclerc from '../../assets/drivers/Charles_Leclerc.png';
import EstebanOcon from '../../assets/drivers/Esteban_Ocon.png';
import FernandoAlonso from '../../assets/drivers/Fernando_Alonso.png';
import GeorgeRussell from '../../assets/drivers/George_Russell.png';
import LanceStroll from '../../assets/drivers/Lance_Stroll.png';
import LandoNorris from '../../assets/drivers/Lando_Norris.png';
import LewisHamilton from '../../assets/drivers/Lewis_Hamilton.png';
import MaxVerstappen from '../../assets/drivers/Max_Verstappen.png';
import SergioPerez from '../../assets/drivers/Sergio_Perez.png';
import YukiTsunoda from '../../assets/drivers/Yuki_Tsunoda.png';
import OscarPiastri from '../../assets/drivers/Oscar_Piastri.png';
import FrancoColapinto from '../../assets/drivers/Franco_Colapinto.png';
import ValteriBottas from '../../assets/drivers/Valteri_Bottas.png';
import KevinMagnussen from '../../assets/drivers/Kevin_Magnussen.png';
import GuanyuZhou from '../../assets/drivers/Guanyu_Zhou.png';
import NicoHulkenberg  from '../../assets/drivers/Nico_Hulkenberg .png';


const driverPhotos = {
    "Pierre Gasly": PierreGasly,
    "Alexander Albon": AlexanderAlbon,
    "Carlos Sainz": CarlosSainz,
    "Daniel Ricciardo": DanielRicciardo,
    "Charles Leclerc": CharlesLeclerc,
    "Esteban Ocon": EstebanOcon,
    "Fernando Alonso": FernandoAlonso,
    "George Russell": GeorgeRussell,
    "Lance Stroll": LanceStroll,
    "Lando Norris": LandoNorris,
    "Lewis Hamilton": LewisHamilton,
    "Max Verstappen": MaxVerstappen,
    "Sergio Perez": SergioPerez,
    "Yuki Tsunoda": YukiTsunoda,
    "Oscar Piastri": OscarPiastri,
    "Franco Colapinto": FrancoColapinto,
    "Valteri Bottas": ValteriBottas,
    "Kevin Magnussen": KevinMagnussen,
    "Guanyu Zhou": GuanyuZhou,
    "Nico Hulkenberg": NicoHulkenberg,
};

const DriverCard = () => {
  const location = useLocation();
  const { driver } = location.state;
  const driverName = `${driver.givenName} ${driver.familyName}`;
  const driverPhoto = driverPhotos[driverName]

  return (
    <div className="driver-card grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white w-full h-full">
      <div className="flex flex-col items-center justify-center">
        <img src={driverPhoto} alt={driverName} className="object-cover mb-4" />
        <h1 className="text-lg font-bold">{driver.givenName} {driver.familyName}</h1>
      </div>
      <div className="flex flex-col justify-center m-auto">
        <ul>
          <li className="mb-2"><strong>Nationality:</strong> {driver.nationality}</li>
          <li className="mb-2"><strong>Constructor:</strong> {driver.constructor}</li>
          <li className="mb-2"><strong>Points:</strong> {driver.points}</li>
          <li className="mb-2"><strong>Wins:</strong> {driver.wins}</li>
        </ul>
      </div>
    </div>
  );
};

export default DriverCard;