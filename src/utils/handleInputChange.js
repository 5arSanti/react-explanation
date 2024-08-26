/**
 * Description placeholder
 *
 * @param {string} key -- Nombre de la key del objeto json que va a actualizar
 * @param {any} value -- Valor a almacenar dentro de la key del objeto json
 * @param {function} setState -- funcion de actualzacion del estado
 */
const handleInputChange = (key, value, setState) => {
    const numericValue = parseInt(value) || value;

    setState((prevValues) => ({ 
        ...prevValues, 
        [key]: numericValue
     }));
};

export { handleInputChange }