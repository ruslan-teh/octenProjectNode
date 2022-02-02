import React from 'react';
import {useSelector} from "react-redux";
import Item from "../Item/Item";

const Items = () => {

    const {items} = useSelector(state => state['formReduce']);

    return (
        <div>
            {items.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
};

export default Items;