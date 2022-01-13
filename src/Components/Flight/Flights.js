import React, {useEffect, useState} from 'react';


import Flight from "./Flight";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flight => setFlights(flight.filter(item => item.launch_year !== '2020')));
    }, []);

    return (
        <div>
            {
                flights.map(item => <Flight key={item.flight_number}
                                            name={item.mission_name}
                                            year={item.launch_year}
                                            img={item.links.mission_patch_small}

                />)
            }
        </div>
    );
};

export default Flights;