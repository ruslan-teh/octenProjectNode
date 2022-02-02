import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/form.slice";

const Form = () => {

    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addItem({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('value')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;