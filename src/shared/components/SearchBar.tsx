import { useEffect, useState, type KeyboardEvent } from "react"

interface SearchI {
    placeholder?: string
    onQuery: (query: string) => void
}


export const SearchBar = ({ placeholder = 'Buscar', onQuery }: SearchI) => {

    const [query, setQuery] = useState('')

    // para el Debounce, el effect se monta cuando se renderiza el componente
    useEffect(() => {
        // console.log('Hola desde el EFFECT')s
        // onQuery(query)

        const timeOutId = setTimeout(() => {
            onQuery(query)
        }, 700)

        return () => {
            // console.log('Funcion de Limpieza')
            clearTimeout(timeOutId)
        }
    }, [query, onQuery])

    const handleSearch = () => {
        onQuery(query)
        setQuery('')
    }

    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') { handleSearch() }
    }

    return (
        <div className="search-container"><input type="text"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}

            onKeyDown={handleOnKeyDown}
        />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}