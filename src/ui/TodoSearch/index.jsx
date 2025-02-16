import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery, setSearchValue]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <input 
      placeholder="Lavar ropa" 
      className="TodoSearch" 
      value={searchQuery}
      onChange={handleSearch}
      disabled={loading}
    />
  )
}

export { TodoSearch };
  