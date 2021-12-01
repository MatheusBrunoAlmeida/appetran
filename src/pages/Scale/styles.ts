import styled from "styled-components/native";

import { colors } from "../../styles";

export const Title = styled.Text`
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
    align-items: flex-end;
    margin-top: 10%;
`

export const ContainerRowAté = styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-top: 7%;
`

export const Label = styled.Text`
    margin-left: 1%;
    color: ${colors.text};
    font-size: 16px;
    margin-left: 7%;
    font-family: 'Montserrat_600SemiBold';
`

export const CalendarButton = styled.TouchableOpacity`
    margin-left: 2%;
`
export const CalendarIcon = styled.Image`
`

export const RegistrosContainer = styled.View`
    margin-top: 2%;
`

export const RegistrosTitle = styled.Text`
    margin-top: 10%;
    margin-left: 1%;
    color: ${colors.text};
    font-size: 16px;
    /* font-weight: bold; */
    margin-left: 7%;
    font-family: 'Montserrat_600SemiBold';
`

export const SearchButton = styled.TouchableOpacity`
    background-color: ${colors.headerColor};
    width: 20%;
    margin-left: 7%;
    margin-top: 5%;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
`

export const TextDate = styled.Text`
    font-size: 12px;
    font-family: 'Montserrat_600SemiBold';
`

export const ViewLoading = styled.View`
    /* background-color: blue; */
    height: 100px;
    justify-content: center;
    align-items: center;
`