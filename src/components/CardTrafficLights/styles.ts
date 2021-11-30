import styled from "styled-components/native";

import { colors } from "../../styles";

export const Container = styled.View`
    width: 80%;
    background-color: ${colors.input};
    margin-left: 7%;
    margin-top: 5%;
    border-radius: 7px;
`

export const ContainerRecordInfo = styled.View`
    margin-top: 2%;
    margin-left: 3%;
    padding: 2%;
`

export const ContainerRow = styled.View`
    flex-direction: row;
`

export const RecordTitle = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    color: ${colors.title};
    font-size: 13px;
`

export const RecordText = styled.Text`
    margin-left: 2%;
    color: ${colors.text};
    margin-bottom: 1%;
    max-width: 50%;
`
export const RecordTitleRed = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    color: ${colors.title};
    font-size: 13px;
`

export const RecordTextRed = styled.Text`
    margin-left: 2%;
    color: red;
    margin-bottom: 1%;
    max-width: 50%;
`