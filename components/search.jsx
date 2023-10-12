import React, { useContext } from 'react'
import { DARK_THEME, ThemeContext, LanguageContext, SearchContext  } from './layout'
import { getTranslation } from '../utils/i18n.utils'

function Search() {
    const { theme } = useContext(ThemeContext)
    const { search, setSearch } = useContext(SearchContext)
    const { language } = useContext(LanguageContext)

    return (
        <input
            className="form-control form-control-lg mb-4 rounded"
            type="text"
            placeholder={getTranslation('SEARCH_FORM_PLACEHOLDER', language)}
            aria-label=".form-control-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-bs-theme={theme === DARK_THEME ? "dark" : "light"}
        />
    )
}

export default Search