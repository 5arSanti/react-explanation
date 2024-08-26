// Estilos
import "./styles.css";

/**
 * Componente Title, con los estilos predefinidos de los titulos
 *
 * @param {*} children -- Recibe un hijo (JSX)
 * @returns {JSX}
 */
const Title = ({children}) => {
    return (
        <div className="title-container">
            <h1 className="title">
                {children}
            </h1>
        </div>

    );
}

export { Title };