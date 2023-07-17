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
                className="w-4 h-4 cursor-pointer text-primary hover:text-secondary"
            />
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={e => handleChangeSearch(e, onChange)}
                className="outline-none"
            />
            {search && (
                <SVG
                    src="icons/cross.svg"
                    className="w-3 h-3 aspect-square cursor-pointer"
                    onClick={() => handleClearSearch(onChange)}
                />
            )}
        </div>
    );
};

export default Search;
