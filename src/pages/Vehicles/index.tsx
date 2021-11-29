import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import Header from "../../components/Header";

import { ContainerInfo, ContainerInfoRow, ContainerRow, ContainerVehicleInfo, InfoText, InfoTitle, InputBoard, Label, NewSearchButton, NewSearchButtonText, NewSearchContainer, SearchButton, SearchIcon, VehicleTitle } from "./styles";


import searchIcon from '../../../assets/searchIcon.png'

function Vehicles(){
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
                title="Veiculos"
                backButton={true}
            />

            <Label>Digite a placa:</Label>
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
                <ContainerVehicleInfo>
                    <VehicleTitle>HONDA/CG 125 TITAN KS</VehicleTitle>

                    <ContainerInfo>
                        <ContainerInfoRow>
                            <InfoTitle>Ano:</InfoTitle>
                            <InfoText>2002</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Cor:</InfoTitle>
                            <InfoText>Vermelha</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Municipio/UF:</InfoTitle>
                            <InfoText>Quirinopolis/GO</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Tipo:</InfoTitle>
                            <InfoText>MOTOCICLETA</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Especie:</InfoTitle>
                            <InfoText>Passageiro</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Categoria:</InfoTitle>
                            <InfoText>PARTICULAR</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Renavan:</InfoTitle>
                            <InfoText>12SASD12312</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Chaci:</InfoTitle>
                            <InfoText>12SASD12312</InfoText>
                        </ContainerInfoRow>

                        <ContainerInfoRow>
                            <InfoTitle>Restrição:</InfoTitle>
                            <InfoText>VEICULO COM LICENCIAMENTO VENCIDO</InfoText>
                        </ContainerInfoRow>
                    </ContainerInfo>
                </ContainerVehicleInfo> 
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

export default Vehicles;