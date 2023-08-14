import { createContext, useContext, useState } from 'react';
const DecoInfoContext = createContext();

export const useDecoInfo = () => {
    return useContext(DecoInfoContext);
};

export const DecoInfoProvider = ({ value, children }) => {
    const [decoInfo, setDecoInfo] = useState(value); 

    return (
        <DecoInfoContext.Provider value={{ decoInfo, setDecoInfo }}>
            {children}
        </DecoInfoContext.Provider>
    );
};