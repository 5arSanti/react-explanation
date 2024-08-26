// React
import React from "react";

// Contexto
import { AppContext } from "../../../Context";

// Componentes
import { Title } from "../../components/Title";
import { ControllerInputsContainer } from "../../components/ControllerInputsContainer";
import { DisplayInfoContainer } from "../../components/DisplayInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../components/WrapperContainers";
import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { TextCard } from "../../components/TextComponents";
import { SubTitle } from "../../components/SubTitle";


/**
 * Componente Home utilizado para la pantalla Home
 *
 * @returns {JSX}
 */
const Home = () => {
    // Uso del contexto
    const context = React.useContext(AppContext);

    // Creacion de un estado
    const [values, setValues] = React.useState({
        title: null,
        text: null,
    })

    return (
        <WrapperContainer2 flexDirection="column" padding={50} gap={30}>
            <Title>Bienvenido a la explicación basica de React</Title>

            <SubTitle>Manejo de estados</SubTitle>
            <AllInfoGridContainer className="grid-075-125">
                <ControllerInputsContainer values={values} setValues={setValues}/>

                <DisplayInfoContainer values={values}/>
            </AllInfoGridContainer>


            <SubTitle>Mapeo de Arrays</SubTitle>
            <AllInfoGridContainer className="grid-1-1">
                {context.testArray?.map((item, index) => (
                    <WrapperContainer1 key={index}>
                        <TextCard>{item}</TextCard>
                    </WrapperContainer1>
                ))}
            </AllInfoGridContainer>
        </WrapperContainer2>
    );
}

export { Home };