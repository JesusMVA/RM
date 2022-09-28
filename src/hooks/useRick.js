import { useState, useEffect } from "react";

    const useRick = () => {
        const [character, setCharacter] = useState([]);
        const [page, setPage] = useState(1);

    function prev () {
        if(page <= 1){
            page(1);
        }
        else{
            setPage(page -1);
        }
    }

    function next () {
        if(page >=42){
            page(42);
        }
        else{
            setPage(page + 1);
        }
    }

    useEffect(() => {
        async function getAllPersons() {
            const api = await fetch(`https://rickandmortyapi.com/api/character/${page}`);
            const persons = api.json();
            setCharacter(persons.results);
    }
    getAllPersons();
},[page])

return {
    character,
    next,
    prev,
    page
}
}

export default useRick
