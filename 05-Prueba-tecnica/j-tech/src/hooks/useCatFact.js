import { useEffect, useState } from 'react';

/* services */
import { GetRandomFact } from '../services/fetch';

export const useCatFact = () => {
    const [fact, setFact] = useState('');
    
    const getRandomFact = () => {
        GetRandomFact()
            .then(newFact => setFact(newFact))
            .catch(e => e);
    };

    /* Efecto para el facts */
    useEffect(getRandomFact, []);

    return {fact, getRandomFact}
};