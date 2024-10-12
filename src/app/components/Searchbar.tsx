"use client";

import React from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";

export default function Searchbar() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  return (
    <>
      {isSearchOpen ? (
        <div className={`relative w-[400px] transition-all duration-300`}>
          <input
            className='w-full p-2 border border-gray-500 rounded focus:outline-primary transition duration-300'
            placeholder='Search for songs, artists, albums'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className='absolute right-2 top-3 transition-transform duration-300 hover:scale-110'
            onClick={() => setIsSearchOpen(false)}
          >
            <IoClose />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsSearchOpen(true)}
          className='transition-transform duration-300 hover:scale-110'
        >
          <IoSearchOutline size={28} />
        </button>
      )}
    </>
  );
}
