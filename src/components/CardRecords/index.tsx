import React from "react";
import { Container, ContainerRecordInfo, ContainerRow, RecordText, RecordTextRed, RecordTitle, RecordTitleRed } from "./styles";

function RecordsCard(){
    return(
        <>
            <Container>
                <ContainerRecordInfo>
                    <ContainerRow>
                        <RecordTitle>Nome:</RecordTitle>
                        <RecordTextRed>Juliano Paulo</RecordTextRed>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Função:</RecordTitle>
                        <RecordText>Agente de transito</RecordText>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Evento:</RecordTitle>
                        <RecordText>Plantão - Noturno</RecordText>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Local Apresentação:</RecordTitle>
                        <RecordText>Posto Avençado 2 - Campinas</RecordText>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Tipo Escala:</RecordTitle>
                        <RecordText>Escala Hora Extra</RecordText>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitleRed>Entrada:</RecordTitleRed>
                        <RecordTextRed>11/08/2002 - 18:00</RecordTextRed>
                    </ContainerRow>

                    <ContainerRow>
                        <RecordTitle>Saida:</RecordTitle>
                        <RecordTextRed>12/08/2002 - 00:00</RecordTextRed>
                    </ContainerRow>
                </ContainerRecordInfo>
            </Container>
        </>
    )
}

export default RecordsCard;