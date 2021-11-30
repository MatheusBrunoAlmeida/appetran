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
    margin-top: -20%;
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