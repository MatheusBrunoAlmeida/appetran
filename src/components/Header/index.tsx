import React from "react";

import { Text, View } from "react-native";
// import { ContainerColumn } from "../Card/style";

import { Container, Title} from "./style";

interface HeaderProps{
    title: string
    userName?: string;
    avatar?: any;
    pageInfo?: string;
}

const Header: React.FC<HeaderProps> = ({title, userName, avatar,pageInfo}) => {

    return(
        <Container>
            <Title> {title} </Title>
        </Container>
    )
}

export default Header;