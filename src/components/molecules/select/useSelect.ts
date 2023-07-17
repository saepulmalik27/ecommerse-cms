import { useState } from "react";

const useSelect = (data: string[], onSelect: (value: string) => void) => {
    const [selected, setSelected] = useState("");
    const [query, setQuery] = useState("");

    const filteredData =
        query === ""
            ? data
            : data.filter(list =>
                  list
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    const handleSelect = (value: string) => {
        setSelected(value);
        onSelect(value);
    };

    const handleSearch = (e: any) => {
        setQuery(e.target.value);
    };

    const handleClear = () => {
        setQuery("");
    };

    return {
        selected,
        handleSelect,
        filteredData,
        query,
        handleSearch,
        handleClear,
    };
};

export default useSelect;
