import React, {useEffect} from 'react';

import {Button} from '../index';

const Paginator = ({searchParams}) => {
    const pagesArr = [];

    useEffect(() => {
        for (let i = 1; i <= searchParams; i++) {
            pagesArr.push(i)
        }
    }, [searchParams])


    return (
        <div>
            <Button to={`?page=${+searchParams.get('page') - 1}`}>Prev</Button>
            {pagesArr.map(page => <Button key={page} to={`?page=${page}`} isNav={true}>{page}</Button>)}
            <Button to={`?page=${+searchParams.get('page') + 1}`}>Next</Button>
        </div>
    );
};

export {Paginator};