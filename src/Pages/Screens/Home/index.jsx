import React from "react";
import { Title } from "../../components/Title";

import { ControllerInputsContainer } from "../../components/ControllerInputsContainer";
import { DisplayInfoContainer } from "../../components/DisplayInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../components/WrapperContainers";
import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { TextCard } from "../../components/TextComponents";
import { AppContext } from "../../../Context";
import { SubTitle } from "../../components/SubTitle";

const Home = () => {
    const context = React.useContext(AppContext);

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