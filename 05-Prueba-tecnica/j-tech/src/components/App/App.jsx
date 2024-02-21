import { useState, useEffect } from "react";


/* hooks */
import { useCatImage } from "../../hooks/useCatImage";
import { useCatFact } from "../../hooks/useCatFact";

/* style */
import './style.css';

/* component */
import InputWord from "../InputWord";

const Otro = () => {

    const { imge } = useCatImage({ fact: 'mm'})

    return (
        <>
            {imge && <img src={imge}></img>}
        </>
    )
};

const App = () => {

    const { fact, getRandomFact} = useCatFact();
    const { imge, fetchCatImage } = useCatImage({ fact });
    
    const getNewFact = async () => {
        getRandomFact();
    };

    return (
        <>
        <main>
            <h1> App de gatitos </h1>

            { fact  && <p> { fact } </p> }
            { imge  && <img src={imge} alt="gatitos" /> }

            <button onClick={getNewFact}> Click change facts </button>
            <InputWord changeImg = { fetchCatImage }></InputWord>
        </main>

        <Otro></Otro>
        <Otro></Otro>

        </>
    )
};

export default App;

