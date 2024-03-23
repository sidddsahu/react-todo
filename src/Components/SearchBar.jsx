import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
      e.preventDefault();
      setSearchTerm(e.target.value);
      onSearch(searchTerm);

  };

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <form onSubmit={handleSubmit} className=' flex'>
      <label className='text-xl' htmlFor="search"></label>
      <input
      placeholder='search for products....'
      className=' px-9 py-2 mt-3'
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='border-0 px-6 py-2 mt-3 hover:bg-pink-500 font-semibold bg-black text-white' type="submit"><IoSearch /></button>
    </form>
  );
}

export default SearchBar;
