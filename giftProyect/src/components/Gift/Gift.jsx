import { useState } from "react";

/* Components */
import  Input  from "../Input/Input";

const Gift = () => {
    const [categories, setCategories] = useState([]);

    const updateValue = (input) => {
        if (input.trim() !== '') {
            setCategories([...categories, input]);
            console.log(input);
        } else {
            alert('Valor de entrada inválido');
        }
    };

    return (
        <>
            <h1>Gift Components</h1>
            <Input update={updateValue}></Input>
            {

                categories.map( (category, _id) => {
                    return (
                    <li key={_id}>
                        {category}
                    </li>
                    );
                })

            }
        </>
    )
}

export default Gift;
