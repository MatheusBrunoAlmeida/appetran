import React from "react";

import { Text } from "react-native";

import { Container, Title } from "./style";

interface HeaderProps{
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return(
        <Container>
            <Title> {title} </Title>
        </Container>
    )
}

export default Header;