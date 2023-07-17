import React from "react";
import debounce from "lodash/debounce";

const useSearch = () => {
    const [search, setSearch] = React.useState("");

    const debouncedCallback = React.useRef(
        debounce((cb: (value: string) => void, value: string) => {
            cb(value);
        }, 300)
    ).current;

    const handleChange = React.useCallback(
        (
            e: React.ChangeEvent<HTMLInputElement>,
            cb: (value: string) => void
        ) => {
            const value = e.target.value;
            setSearch(value);
            debouncedCallback(cb, value);
        },
        [debouncedCallback]
    );

    const handleClearSearch = (cb: (value: string) => void) => {
        setSearch("");
        cb("");
    };

    return { search, handleChangeSearch: handleChange, handleClearSearch };
};

export default useSearch;
