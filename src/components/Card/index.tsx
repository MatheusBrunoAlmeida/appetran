import React from "react";

import { View, TouchableOpacity } from "react-native";

import { Container } from "./style";


const Card: React.FC = ({children}) =>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Card;