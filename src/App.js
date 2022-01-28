import React, {useReducer} from 'react';


function App() {
    const reduser = (state, action) => {
       switch (action.type){
           case 'inc':
               return {...state, count1: state.count1 + 1}
           case 'dec':
               return {...state, count1: state.count1 - 1}
           case 'reset':
               return {...state, count1: action.payload}
           case 'inc1':
               return {...state, count2: state.count2 + 1}
           case 'dec1':
               return {...state, count2: state.count2 - 1}
           case 'reset1':
               return {...state, count2: action.payload}
           case 'inc2':
               return {...state, count3: state.count3 + 1}
           case 'dec2':
               return {...state, count3: state.count3 - 1}
           case 'reset2':
               return {...state, count3: action.payload}
       }
    }

    const [state, dispach] = useReducer(reduser, {count1: 0, count2: 0, count3: 0})


    return (

        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispach({type: 'inc'})}>inc</button>
                <button onClick={() => dispach({type: 'dec'})}>dec</button>
                <button onClick={() => dispach({type: 'reset', payload: 0})}>reset</button>
            </div>
            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispach({type: 'inc1'})}>inc</button>
                <button onClick={() => dispach({type: 'dec1'})}>dec</button>
                <button onClick={() => dispach({type: 'reset1', payload: 0})}>reset</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispach({type: 'inc2'})}>inc</button>
                <button onClick={() => dispach({type: 'dec2'})}>dec</button>
                <button onClick={() => dispach({type: 'reset2', payload: 0})}>reset</button>
            </div>
        </div>
    );
}

export default App;