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
    margin-top: -12%;
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
    margin-top: -16%;
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

export const ContainerAutoInfo = styled.View`
    margin-top: 5%;
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

export const InfoTextRed = styled.Text`
    font-size: 14px;
    margin-top: 1%;
    margin-left: 2%;
    color: red;
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