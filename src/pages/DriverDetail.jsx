import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DriverCard from '../components/DriverCard/DriverCard';

function DriverDetail() {
    const location = useLocation();
    const { driver } = location.state;
    // const { drivers } = location.state;
    // const { year } = useOutletContext();

    return (
       <DriverCard  driver={driver} />
    );
}

export default DriverDetail;
