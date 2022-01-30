import React, {useReducer, useRef} from 'react';

import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

const App = () => {

    const animalReducer = (state, action) => {
        switch (action.type) {
            case 'addCat':
                return {...state, cats: [...state.cats, action.payload.cat]}
            case 'addDog':
                return {...state, dogs: [...state.dogs, action.payload.dog]}
            case 'delCat':
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
            case 'delDog':
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(animalReducer, {cats: [], dogs: []});
    const catInput = useRef();
    const dogInput = useRef();

    const addCat = (e) => {
        e.preventDefault();

        const name = catInput.current.value;

        if (!name) {
            return
        }

        const cat = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: 'addCat', payload: {cat}})
        catInput.current.value = ' '

    }

    const addDog = (e) => {
        e.preventDefault()

        const name = dogInput.current.value;

        if (!name) {
            return
        }

        const dog = {
            id: new Date().getTime(),
            name
        }

        dispatch({type: 'addDog', payload: {dog}})
        dogInput.current.value = ' ';

    }

    const deleteCat = (id) => {
        dispatch({type: 'delCat', payload: {id}})
    }

    const deleteDog = (id) => {
        dispatch({type: 'delDog', payload: {id}})
    }

    return (
        <div>

            <form>
                <label>Cats: <input type="text" name={'cat'} ref={catInput}/></label>
                <button onClick={addCat}>Save</button>
                <label>Dogs: <input type="text" name={'dog'} ref={dogInput}/></label>
                <button onClick={addDog}>Save</button>
            </form>

            <hr/>

            <div>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
};

export default App;