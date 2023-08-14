import { createContext, useContext, useState } from 'react';
const OpenedCategoryContext = createContext();

export const useOpenedCategory = () => {
    return useContext(OpenedCategoryContext);
};

export const OpenedCategoryProvider = ({ value, children }) => {
    const [openCategory, setOpenCategory] = useState(value); 

    return (
        <OpenedCategoryContext.Provider value={{ openCategory, setOpenCategory }}>
            {children}
        </OpenedCategoryContext.Provider>
    );
};