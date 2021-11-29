import styled from "styled-components/native";

import { colors } from "../../styles";

export const Label = styled.Text`
    margin-top: 10%;
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
    margin-top: 10%;
    margin-left: 7%;
`

export const VehicleTitle = styled.Text`
    font-weight: 600;
    font-size: 16px;
    font-family: 'Montserrat_600SemiBold';
    color: ${colors.title};
`

export const ContainerInfo = styled.View`
    margin-top: 7%;
`

export const ContainerInfoRow = styled.View`
    flex-direction: row;
    margin-bottom: 4%;
`

export const InfoTitle = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 16px;
    color: ${colors.title};
`

export const InfoText = styled.Text`
    font-size: 14px;
    font-family: 'Monteserrat_400Regular';
    margin-top: 1%;
    margin-left: 2%;
    color: ${colors.textInfo};
    max-width: 50%;
`

export const NewSearchContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const NewSearchButton = styled.TouchableOpacity`
    margin-top: 10%;
    background-color: ${colors.headerColor};
    width: 50%;
    align-items: center;
    padding: 2%;
    border-radius: 8px;
`

export const NewSearchButtonText = styled.Text`

`