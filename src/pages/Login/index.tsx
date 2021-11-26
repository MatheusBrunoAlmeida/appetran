import React from "react";

import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { useNavigation } from '@react-navigation/core';

import { ButtonSignIn, ButtonSignInText, EtranLogo, Form, InputText, LoginContainer } from "./style";

const Login: React.FC = () => {
    const route = useNavigation();

    function handleSignIn(){
        route.navigate('Dashboard')
    }

    return(
        <LoginContainer>
            <EtranLogo>Etran</EtranLogo>

            <Form>
                <InputText 
                    placeholder="Codigo do agente"
                    placeholderTextColor="#ACACAC"
                />
                <InputText 
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor="#ACACAC"
                />

                <ButtonSignIn
                    onPress={()=>handleSignIn()}
                >
                    <ButtonSignInText>Logar</ButtonSignInText>
                </ButtonSignIn>
            </Form>
        </LoginContainer>
    )
}

export default Login;