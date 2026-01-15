import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifsList } from "./gifs/components/GifsList";
import { useState } from 'react';

export const GifsApp = () => {
    const [prevTerms, setPrevTerms] = useState(['bdz'])

    const handleClick = (term: string) => {
        console.log({ term })

    }

    const handleSearch = (query: string = '') => {
        //    ## Tarea: 

        // 2. Convertir el **query a minúsculas y eliminar espacios** en blanco
        query = query.trim().toLowerCase()
        // 1. Validar que el query **no esté vacío**
        if (query.length === 0) return
        // 3. **Evitar búsquedas duplicadas** verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        if (prevTerms.includes(query)) return
        // 4. Actualizar previousTerms **agregando el nuevo término al inicio y limitando a 8 elementos** máximo, es decir no puede ser un arreglo de más de 8.
        //*forma 1 de hacerlo :
        const currentTerms = prevTerms.slice(0, 6)
        currentTerms.unshift(query)

        //* o todo lo de arriba en una linea
        setPrevTerms([query, ...prevTerms].slice(0, 7))




    }

    return (
        <>
            {/* // Header */}
            < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gifs perfecto" />

            {/* // Search */}
            < SearchBar placeholder="Buscar lo que quieras"
                onQuery={handleSearch}
            />

            {/* // Busquedas Previas */}
            < PreviousSearches searches={prevTerms} onLabelClick={handleClick} />

            {/* Gifs */}
            <GifsList gifs={mockGifs} />
        </>
    )
}






