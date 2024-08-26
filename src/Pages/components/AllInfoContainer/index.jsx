import "./styles.css";

/**
 * Contenedor principal del proyecto
 * @param {JSX} children -- Recibe un Hijo (JSX)
 * @returns {JSX}
 */
const AllInfoContainer = ({children}) => {
    return(
        <div className="all-info-container">
            {children}
        </div>
    );
}

/**
 * Contenedor con configuracion de estilos para contenedores grid
 *
 * @param {JSX} children -- Recibe hijos (JSX)
 * @param {number} [padding] -- Estilo padding. Valor predeterminado: 0
 * @param {string} [className] -- Nombre de clase para estilos
 * @param {number} [gap] -- Estilo gap. Valor predeterminado: 20
 * 
 * @returns {JSX}
 */
const AllInfoGridContainer = ({children, padding=0, className="grid-075-125", gap=20}) => {
    return(
        <div className={`all-info-grid-container ${className}`} style={{
            gap: gap,
            padding: padding,
        }}>
            {children}
        </div>
    );
}

export { AllInfoContainer, AllInfoGridContainer };