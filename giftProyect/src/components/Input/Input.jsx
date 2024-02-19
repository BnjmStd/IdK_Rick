import { useState } from 'react'

const Input = ({ update }) => {


    const [input, setInput] = useState('');
    
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        update(input);
    };

    return (
        <form onSubmit={submit}>
            <input 
                value={input} 
                onChange={handleChange} 
                type="text" 
                placeholder="add category" 
            />
            <button type="submit"> Add </button>
        </form>
    )
}

export default Input;