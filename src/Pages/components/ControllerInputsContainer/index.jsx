import { handleInputChange } from "../../../utils/handleInputChange";
import { InputCard, TextAreaCard } from "../InputsCards";
import { WrapperContainer1 } from "../WrapperContainers";

/**
 * Componente encargado de contener los inputs del titulo y texto
 *
 * @param {object} [values] -- Estado values que contiene las variables de almacenamiento del titulo y texto
 * @param {Function} [setValues] -- Funcion encargada de actualizar el estado
 * @returns {JSX}
 */
const ControllerInputsContainer = ({values={}, setValues}) => {
    return(
        <WrapperContainer1>
            <InputCard
                id={"title"}
                label={"Ingrese el Titulo"}
                placeholder="Ingrese el Titulo"
                onChange={(value) => {handleInputChange("title", value, setValues)}}
                defaultValue={values?.title}
            />
            <TextAreaCard
                id={"text"}
                label={"Ingrese el texto"}
                placeholder="Ingrese el texto"
                onChange={(value) => {handleInputChange("text", value, setValues)}}
                defaultValue={values?.text}
            />
        </WrapperContainer1>
    );
}

export { ControllerInputsContainer}