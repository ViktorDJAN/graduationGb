import React, {createContext} from "react";


export const FilterContext = createContext();

export const FilterProvider = (x) => {
    const [filter, setFilter] = React.useState("all");
    return (
        <FilterContext.Provider value={filter}>
            {x.children}
        </FilterContext.Provider>
    )
}