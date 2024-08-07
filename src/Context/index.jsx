import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

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