import React, { FC, useMemo, useState } from 'react'

export const SearchContext = React.createContext({
  query: '',
  searchHandler: (
    query: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | string
  ) => {},
})

const SearchContextProvider: FC = (props) => {
  const [query, setQuery] = useState('')

  const searchHandler = useMemo(() => {
    return (
      query: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | string
    ) => {
      typeof query === 'string' ? setQuery(query) : setQuery(query.target.value)
    }
  }, [query])

  return (
    <SearchContext.Provider value={{ query, searchHandler }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
