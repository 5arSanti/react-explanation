//Dependencias

import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

/**
 * Description placeholder
 *
 * @param {JSX} children -- Recibe hijos (JSX)
 * @returns {*}
 */
const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // Estado de prueba utilizando el contexto
    const [testArray, setTestArray] = React.useState(["Item1", "Item2", "Item3", "Item4"])

    return (
        <AppContext.Provider
            value={{
                testArray,
                setTestArray
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }