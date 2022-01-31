import React, {useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "../Car/Car";
import {getAllCars} from "../../store/car.slice";

const Cars = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            {status === 'pending' && <h1>loading</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export default Cars;