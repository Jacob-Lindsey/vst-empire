import React, { useState, useEffect, useContext } from 'react';
import useShoppingCart from '../../hooks/useShoppingCart';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const {
        state,
        handleAddItem,
        removeItem,
        handleCartChange,
    } = useShoppingCart();

    return (
        <AppContext.Provider
            value={{
                state,
                handleAddItem,
                removeItem,
                handleCartChange,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };