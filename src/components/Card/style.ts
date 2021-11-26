import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #484848;
    width: 86%;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 7%;
    margin-top: 1px;
    padding: 7% 3% 7% 3%;
`

export const ImageCard = styled.Image`
    margin-left: 7%;
`

export const ContainerColumn = styled.View`
    flex-direction: column;
    margin-left: 10%;
`

export const TitleCard = styled.Text`
    font-size: 16px;
    color: #d1d1d1;
    font-family: 'Montserrat_600SemiBold'
`
export const TextCard = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    color: #d1d1d1;
`