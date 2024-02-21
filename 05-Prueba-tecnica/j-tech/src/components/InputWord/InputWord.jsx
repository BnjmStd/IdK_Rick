
import { useState } from 'react';

const InputWord = ({ changeImg }) => {

    /* input */
    const [ valueInputWord, setValueInputWord] = useState('');

    const handleChangeValueInput = (event) => {
        setValueInputWord(event.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!valueInputWord) return
        await changeImg({ word: valueInputWord })
        
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                placeholder="Ingrese un parrafo de min 3 palabras"
                value={valueInputWord}
                onChange={handleChangeValueInput}
                ></input>
                <button type="submit">ok</button>
            </form>

        </>
    )
}

export default InputWord;
