import "./styles.css";

/**
 * Componete de texto con estilo predefinidos y reutilizable
 *
 * @param {JSX} children -- Recibe hijos (JSX)
 * @param {string} [textAlign] -- Configuracion del estilo textAlign. Valor predeterminado: "start"
 * @param {string} [width] -- Configuracion del estilo width. Valor predeterminado: "100%"
 * @param {string} [className] -- Nombre de la clase con estilos predefinidos
 * @param {number} [fontSize] -- Configuracion del estilo fontSize. Valor predeterminado: 16
 * @returns {JSX}
 */
const TextCard = ({children, textAlign="center", width="100%", className="", fontSize=16}) => {
    return(
        <p 
            style={{
                textAlign: textAlign, 
                width: width,
                fontSize: fontSize,
            }} 
            className={`text-card ${className}`}>{children}</p>
    );
}

/**
 * ${1:Description placeholder}
 *
 * @param {JSX} children -- Recibe hijos (JSX)
 * @param {string} [className] -- Nombre de la clase con estilos predefinidos
 * @returns {JSX}
 */
const SpanCard = ({children, className}) => {
    return(
        <span className={`span-card ${className}`}>{children}</span>
    );
}

export { TextCard, SpanCard }