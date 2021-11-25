import React from "react";

import { Text } from "react-native";
// import { ContainerColumn } from "../Card/style";

import { Container, ContainerColumn ,ContainerImage,Title, UserName } from "./style";

interface HeaderProps{
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return(
        <Container>
            <ContainerColumn>
                <Title> Bem-Vindo </Title>
                <UserName> {title} </UserName>
            </ContainerColumn>

            <ContainerImage></ContainerImage>
        </Container>
    )
}

export default Header;