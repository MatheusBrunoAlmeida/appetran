import styled from "styled-components/native";

import { colors } from "../../styles";

export const Container = styled.View`
  margin-top: 20%;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 10;
`

export const ContainerColumn = styled.View`
  flex-direction: column;
  margin-left: 7%;
`

export const Title = styled.Text`
    font-size: 18;
    font-weight: 600;
    padding-bottom: 1px;
    color: #F1DA61;
    font-family: 'Inter_900Black';
    margin-left: -3px;
`

export const UserName = styled.Text`
  color: ${colors.text};
  font-size: 13px;
  margin-top: 5px;
  margin-left: -2px;
`

export const ContainerImage = styled.TouchableOpacity`
  background-color: #d1d1d1;
  height: 40px;
  width: 40px;
  margin-right: 6%;
  border-radius: 50px;
`

export const PageInfo = styled.Text`
  color: ${colors.text};
  font-size: 13px;
  margin-top: 5px;
  margin-left: -2px;
`

export const UserAvatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 50px;
`