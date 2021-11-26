import React from "react";

import { View, TouchableOpacity } from "react-native";

import { Container, ContainerColumn, ImageCard, TextCard, TitleCard } from "./style";

interface CardProps{
    imageCard: any;
    titleCard: string;
    textCard: string;
    onPress?:any;
    children?: any;
}

function Card({imageCard, titleCard, textCard, onPress, children}:CardProps){
    return(
        <Container
            onPress={onPress}
        >
            <ImageCard
                source={imageCard}
            />
            
            <ContainerColumn>
                <TitleCard> {titleCard} </TitleCard>
                <TextCard> {textCard} </TextCard>
            </ContainerColumn>

            {children}
        </Container>
    )
}

export default Card;