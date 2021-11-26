import React from "react";

import { Text, View } from "react-native";
// import { ContainerColumn } from "../Card/style";

import { Container, ContainerColumn ,ContainerImage,PageInfo,Title, UserAvatar, UserName } from "./style";

interface HeaderProps{
    title: string
    userName?: string;
    avatar?: any;
    pageInfo?: string;
}

const Header: React.FC<HeaderProps> = ({title, userName, avatar,pageInfo}) => {
    const name = userName;

    return(
        <Container>
            {userName == undefined ? (
                <>
                    <ContainerColumn>
                        <Title> {title} </Title>
                        <PageInfo> {pageInfo} </PageInfo>
                    </ContainerColumn>
                
                    <ContainerImage>
                        <UserAvatar 
                            source={avatar}
                        />
                    </ContainerImage>
                </>
            ) : (
                <>
                <ContainerColumn>
                    <Title> {title} </Title>
                    <UserName> {userName} </UserName>
                </ContainerColumn>

                <ContainerImage></ContainerImage>
                </>
            )
        }
        </Container>
    )
}

export default Header;