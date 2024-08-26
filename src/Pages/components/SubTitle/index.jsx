// Estilos
import "./styles.css";

/**
 * Componente SubTitle, que cuenta con los estilos predefinidos de los subtitulos 
 * @param {*} children -- Recibe un hijo
 * @param {string} [textAlign] -- Configuracion del estilo textAlign. Valor predeterminado: "start"

 * @returns {JSX}
 */

const SubTitle = ({children, textAlign = "start"}) => {

    return(
        <div className="sub-title">
            <h2  style={{
                textAlign: textAlign,
            }}>
                {children}
            </h2>
        </div>
    );
}

export { SubTitle };