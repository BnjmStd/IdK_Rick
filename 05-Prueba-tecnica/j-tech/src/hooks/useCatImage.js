import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
    const [imge, setImg] = useState();

    const fetchCatImage = async ({ word }) => {
        try {
            const response = await fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`);
            const result = await response.json();
            const imgUrl = `https://cataas.com/cat/${result._id}/says/${word}?size=50&fontColor=white`;
            setImg(imgUrl);

        } catch (error) {
            console.error('Error fetching cat image:', error);
            return null; 
        }
    };

    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(' ', 3).join(' ');
        fetchCatImage({ word: firstWord });
    }, [fact]);

    return { imge, fetchCatImage };
}
