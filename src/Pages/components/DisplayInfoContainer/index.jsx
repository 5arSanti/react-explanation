import { SubTitle } from "../SubTitle";
import { TextCard } from "../TextComponents";
import { WrapperContainer1 } from "../WrapperContainers";

const DisplayInfoContainer = ({values={}}) => {
    return(
        <WrapperContainer1>
            <SubTitle>{values?.title ? values.title : "Titulo"}</SubTitle>

            <TextCard textAlign="start">{values?.text ? values.text : "Texto"}</TextCard>
        </WrapperContainer1>
    );
}

export { DisplayInfoContainer };