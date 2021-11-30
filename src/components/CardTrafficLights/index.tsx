import React from "react";
import { Container, ContainerRecordInfo, ContainerRow, RecordText, RecordTextRed, RecordTitle, RecordTitleRed } from "./styles";

function TrafficLightsCard(){
    return(
        <>
            <Container>
                <ContainerRecordInfo>
                    <ContainerRow>
                        <RecordTitle>Semáfro:</RecordTitle>
                        <RecordTextRed>13</RecordTextRed>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Endereço:</RecordTitle>
                        <RecordText>Rua 3 X Av.Giás</RecordText>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Bairro:</RecordTitle>
                        <RecordText>Central</RecordText>
                    </ContainerRow>
                    
                </ContainerRecordInfo>
            </Container>
        </>
    )
}

export default TrafficLightsCard;