// Icono de React icons
import { AiOutlineCloudUpload } from "react-icons/ai";

// Estilos
import "./styles.css";

/**
 * Componente encargado de contener un input de texto ya configurado y reutilizable
 *
 * @param {string} [type] -- Tipo del input. Valor predenterminado: text
 * @param {string} [id] -- ID del input.
 * @param {string} [label] -- Texto del label del input.
 * @param {string} [placeholder] -- Texto del placeholder del input. Valor pr4edenterminado: placeholder
 * @param {function} onChange -- Funcion que realiza una accion con el texto ingresado al input
 * @param {boolean} [required] -- Valida si es input es obligatorio (Para formularios)
 * @param {string} [defaultValue] -- Define el valor por defecto del input
 * @param {string} [className] -- Nombre de la clase con estilos predefinidos
 * @param {boolean} [haveLabel] -- Define si el input debe mostrar el label
 * @returns {JSX}
 */
const InputCard = ({type="text", id, label, placeholder="placeholder", onChange, required=false, defaultValue="", className="input-container", haveLabel=true}) => {
    return(
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}
            
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required={required}
                defaultValue={defaultValue}
            />
        </div>
    );
}

/**
 * Componente encargado de contener un input de texto de tipo textarea ya configurado y reutilizable
 *
 * @param {string} [id] -- ID del input.
 * @param {string} [label] -- Texto del label del input.
 * @param {string} [placeholder] -- Texto del placeholder del input. Valor pr4edenterminado: placeholder
 * @param {function} onChange -- Funcion que realiza una accion con el texto ingresado al input
 * @param {boolean} [required] -- Valida si es input es obligatorio (Para formularios)
 * @param {string} [defaultValue] -- Define el valor por defecto del input
 * @returns {JSX}
 */
const TextAreaCard = ({id, label, placeholder="placeholder", onChange, required=false, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}

export { InputCard, TextAreaCard };