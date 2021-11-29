import React from "react";

import { Text, View } from "react-native";

import { useNavigation } from '@react-navigation/core';

import { BackButton, BackIcon, Container, Title} from "./style";

import backIcon from '../../../assets/backArrow.png';

interface HeaderProps{
    title: string
    userName?: string;
    avatar?: any;
    pageInfo?: string;
    backButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, backButton, avatar,pageInfo}) => {
    const route = useNavigation()

    return(
        <Container>
            <Title> {title} </Title>

            {backButton == true ? (
                <BackButton
                    onPress={()=>route.goBack()}
                >
                    <BackIcon
                        source={backIcon}
                    />
                </BackButton>
            ) : (<></>)}
        </Container>
    )
}

export default Header;