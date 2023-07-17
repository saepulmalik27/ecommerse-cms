import React from "react";
const useSearch = () => {
    const [search, setSearch] = React.useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        cb: (value: string) => void
    ) => {
        setSearch(e.target.value);
        cb(e.target.value);
    };

    const handleClearSearch = () => {
        setSearch("");
    };

    return { search, handleChangeSearch: handleChange, handleClearSearch };
};

export default useSearch;
