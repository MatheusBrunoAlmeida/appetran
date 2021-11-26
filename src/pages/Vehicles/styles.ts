import styled from "styled-components/native";

import { colors } from "../../styles";

export const Label = styled.Text`
    margin-top: 12%;
    margin-left: 1%;
    color: ${colors.text};
    font-size: 16px;
    /* font-weight: bold; */
    margin-left: 7%;
    font-family: 'Montserrat_600SemiBold';
`

export const ContainerRow = styled.View`
    flex-direction: row;
`

export const InputBoard = styled.TextInput`
    width: 65%;
    background-color: ${colors.input};
    /* border: 1px solid #e7e7e7; */
    margin-left: 7%;
    margin-top: 3%;
    padding: 2%;
    border-radius: 10px;
    
`

export const SearchButton = styled.TouchableOpacity`
    margin-left: 5%;
    margin-top: 10px;
    /* width: 10%; */
`

export const SearchIcon = styled.Image`
`

export const ContainerVehicleInfo = styled.View`
    margin-top: 5%;
    margin-left: 7%;
`

export const VehicleTitle = styled.Text`
    font-weight: 600;
    font-size: 16px;
`