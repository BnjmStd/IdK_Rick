const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const GetRandomFact = () => {
    return (
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data;
            return fact
        })
        .catch(e => {
            return false
        })
    )
};
