import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});


    const formCreate = (e) => {
        const formInfo = {...form, [e.target.name]: e.target.value}
        setForm({...form,...formInfo})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getFilter(form)
    }


    return (
        <div>
            <form>
                <input type="text" name={'name'} value={form.name} onChange={formCreate}/>
                <input type="text" name={'username'} value={form.username} onChange={formCreate}/>
                <input type="text" name={'email'} value={form.email} onChange={formCreate}/>
                <button onClick={onSubmit}>Send</button>
            </form>

        </div>
    );
};

export default Form;