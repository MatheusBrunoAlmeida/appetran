import React from "react";
import { Text, View } from "react-native";

import Header from "../../components/Header";

import { ContainerRow, ContainerVehicleInfo, InputBoard, Label, SearchButton, SearchIcon, VehicleTitle } from "./styles";

import userAvataer from '../../../assets/eu.jpeg';

import searchIcon from '../../../assets/searchIcon.png'

function Vehicles(){
    return(
        <View>
            <Header 
                title="Veiculos"
                pageInfo="Consultar veiculo por placa"
                avatar={userAvataer}
            />

            <Label>Digite a placa:</Label>
            <ContainerRow>
                <InputBoard />
                <SearchButton>
                    <SearchIcon 
                        source={searchIcon}
                    />
                </SearchButton>
            </ContainerRow>

            <ContainerVehicleInfo>
                <VehicleTitle>HONDA/CG 125 TITAN KS</VehicleTitle>
            </ContainerVehicleInfo>
        </View>
    )
}

export default Vehicles;