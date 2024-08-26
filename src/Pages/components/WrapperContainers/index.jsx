// Estilos
import "./styles.css";

/**
 * Componente Wrapper utilizado como padre de otros componentes JSX, Tiene un estilo predefinido por la clase
 *
 * @param {*} children -- Recibe un hijo (JSX)
 * @param {string} [flexDirection] -- Configuracion del estilo flexDirection. Valor predeterminado: "column"
 * @param {number} [padding] -- Configuracion del estilo padding. Valor predeterminado: 30
 * @param {number} [gap] -- Configuracion del estilo gap. Valor predeterminado: 30
 * @param {string} [justifyContent] -- Configuracion del estilo justifyContent. Valor predeterminado: "center"
 * @param {string} [alignItems] -- Configuracion del estilo alignItems. Valor predeterminado: "center"
 
 * @returns {JSX}
 */
const WrapperContainer1 = ({children, flexDirection = "column", padding = 30, gap = 30, justifyContent="center", alignItems="center"}) => {
    return(
        <div className="wrapper-container1 shadow-style border-left-style" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent, 
            alignItems: alignItems,
        }}>
            {children}
        </div>
    );
}


/**
 * Segundo componente Wrapper utilizado como padre de otros componentes JSX, No tiene un estilo predefinido por la clase
 *
 * @param {*} children -- Recibe un hijo (JSX)
 * @param {string} [flexDirection] -- Configuracion del estilo flexDirection. Valor predeterminado: "row"
 * @param {number} [padding] -- Configuracion del estilo padding. Valor predeterminado: 20
 * @param {number} [paddingVertical] -- Configuracion del estilo paddingVertical. Valor predeterminado: null
 * @param {number} [gap] -- Configuracion del estilo gap. Valor predeterminado: 30
 * @param {string} [justifyContent] -- Configuracion del estilo justifyContent. Valor predeterminado: "center"
 * @param {string} [alignItems] -- Configuracion del estilo alignItems. Valor predeterminado: "center"
 * @param {string} [className] -- Nombre de clase con estilos. No tiene valor predeterminado
 
 * @returns {JSX}
 */
const WrapperContainer2 = ({children, flexDirection = "row", padding = 20, paddingVertical=null, gap = 15, justifyContent="start", alignItems="center", className=""}) => {
    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2 };