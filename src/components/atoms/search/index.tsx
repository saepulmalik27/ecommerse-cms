"use client";

import React from "react";
import { SearchProps } from "./search.types";
import SVG from "react-inlinesvg";
import useSearch from "./useSearch";

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
    const { search, handleChangeSearch, handleClearSearch } = useSearch();
    return (
        <div className="flex items-center border border-solid border-tertiary px-2 py-1 rounded-md gap-1">
            <SVG
                src="icons/search.svg"
                className="w-4 h-4 cursor-pointer hover:text-primary"
            />
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={e => handleChangeSearch(e, onChange)}
                className="outline-none"
            />
        </div>
    );
};

export default Search;
