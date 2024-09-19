import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DriversList from "../components/DriversList/DriversList";
import TeamsList from '../components/TeamsList/TeamsList';

const Home = () => {
  const { year } = useOutletContext();

  return (
    // <>    
    //   <div>
    //     <DriversList year={year} />
    //   </div>
    //   <div>
    //     <TeamsList/>
    //   </div>
    // </>
    <div className='flex'>
      <DriversList year={year} />
      <TeamsList year={year} />
    </div>

  );
};

export default Home;
