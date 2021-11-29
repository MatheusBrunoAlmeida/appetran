import React, { useState } from "react";

import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { useNavigation } from '@react-navigation/core';

import { ButtonSignIn, ButtonSignInText, ErrorMessage, EtranLogo, Form, InputText, InputTextPassword, LoginContainer } from "./style";

const Login: React.FC = () => {
    const [codigo, setCodigo] = useState('')
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false)
    
    const route = useNavigation();

    function handleSignIn(){
        if(codigo == ''){
            setErrorMessage(true)
        }
        if(password == ''){
            setErrorMessage(true)
        }

        if(codigo && password != ''){
            route.navigate('Dashboard');
            setCodigo('')
            setPassword('')
            setErrorMessage(false)
        }
    }

    return(
        <LoginContainer>
            <EtranLogo>Etran</EtranLogo>

            <Form>
                <InputText 
                    placeholder="Codigo do agente"
                    placeholderTextColor="#ACACAC"
                    onChangeText={(text)=>setCodigo(text)}
                    value={codigo}
                />
                {errorMessage == true ? (
                    <ErrorMessage>Digite um codigo valido</ErrorMessage>
                ) : (<></>)}

                <InputTextPassword 
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor="#ACACAC"
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                />
                {errorMessage == true ? (
                    <ErrorMessage>Digite uma senha valida</ErrorMessage>
                ) : (<></>)}

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