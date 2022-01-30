import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {
    const {handleSubmit, register , reset} = useForm();

    const submit = (data) => {
        getFormData(data)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('Year')}/></label>
                <button>Send</button>

            </form>

        </div>
    );
};


export default Form;