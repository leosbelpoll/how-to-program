import React, { useContext } from 'react'
import { DARK_THEME, ThemeContext } from './layout'
import { SearchContext } from '../pages'

function Search() {
    const { theme } = useContext(ThemeContext)
    const { search, setSearch } = useContext(SearchContext)

    return (
        <input
            className="form-control form-control-lg mb-4"
            type="text"
            placeholder="Qué desea buscar?"
            aria-label=".form-control-lg example"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-bs-theme={theme === DARK_THEME ? "dark" : "light"}
        />
    )
}

export default Search