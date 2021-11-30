import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import Header from "../../components/Header";

import { ContainerInfo, ContainerInfoRow, ContainerRow, ContainerVehicleInfo, InfoText, InfoTitle, InputBoard, Label, NewSearchButton, NewSearchButtonText, NewSearchContainer, SearchButton, SearchIcon, VehicleTitle } from "../Vehicles/styles";


import searchIcon from '../../../assets/searchIcon.png'
import { ContainerAutoInfo, InfoTextRed } from "./styles";

function InfringementPage(){
    const [showIonfo, setShowInfo] = useState(false);
    const [placa, setPlaca] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    function handleSearch(){
        setIsLoading(true)
        if(placa != ''){
            setTimeout(() => {
                setShowInfo(true);
                setIsLoading(false)
            }, 200);
        }else{
            setTimeout(() => {
                setIsLoading(false)
            }, 200);
        }
    }

    function handleNewSearch(){
        setShowInfo(false)
        setPlaca('')
    }

    return(
        <>
            <Header 
                title="Auto de infração"
                backButton={true}
            />

            <Label>Numero do auto de infração:</Label>

            <ContainerRow>
                <InputBoard 
                    onChangeText={(text)=>setPlaca(text)}
                    value={placa}
                />
                <SearchButton
                    onPress={()=>handleSearch()}
                >
                    <SearchIcon 
                        source={searchIcon}
                    />
                </SearchButton>
            </ContainerRow>

            {isLoading ? (
                <View style={{marginTop: '10%'}}>
                    <ActivityIndicator />
                </View>
            ) : <></>}
            {showIonfo == true ? (
                <ContainerAutoInfo>
                    <ContainerInfo>
                        <ContainerInfoRow>
                            <InfoTitle>Auto:</InfoTitle>
                            <InfoTextRed>A013825237</InfoTextRed>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Agente:</InfoTitle>
                            <InfoText>A2151</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Placa:</InfoTitle>
                            <InfoText>NAR6687</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Situação de cadastro:</InfoTitle>
                            <InfoTextRed>Cadastrado Base Local</InfoTextRed>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Situação Processamento:</InfoTitle>
                            <InfoText>Cadastrado Atuação</InfoText>
                        </ContainerInfoRow>
                    </ContainerInfo>
                </ContainerAutoInfo> 
            ) : (<></>)}
            
            {showIonfo == true ? (
                <NewSearchContainer>
                  <NewSearchButton
                    onPress={()=>handleNewSearch()}
                  >
                      <NewSearchButtonText>Nova pesquisa</NewSearchButtonText>
                  </NewSearchButton>
                </NewSearchContainer>
            ) : (<></>)}
        </>
    )
}

export default InfringementPage