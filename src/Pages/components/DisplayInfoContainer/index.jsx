import { SubTitle } from "../SubTitle";
import { TextCard } from "../TextComponents";
import { WrapperContainer1 } from "../WrapperContainers";

/**
 * Componente encargado de contener la informacion almacenada en el estado
 *
 * @param {object} [values] -- Estado values que contiene las variables de almacenamiento del titulo y texto
 * @returns {JSX}
 */
const DisplayInfoContainer = ({values={}}) => {
    return(
        <WrapperContainer1>
            <SubTitle>{values?.title ? values.title : "Titulo"}</SubTitle>

            <TextCard textAlign="start">{values?.text ? values.text : "Texto"}</TextCard>
        </WrapperContainer1>
    );
}

export { DisplayInfoContainer };