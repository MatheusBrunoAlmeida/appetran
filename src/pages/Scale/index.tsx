import React, { useState } from "react";

import { View, StyleSheet, ActivityIndicator, Platform} from 'react-native'

import Header from "../../components/Header";
import RecordsCard from '../../components/CardRecords';

import { colors } from "../../styles";

import { CalendarButton, CalendarIcon, ContainerRow, ContainerRowAté, Label, RegistrosContainer, RegistrosTitle, SearchButton, TextDate, Title, ViewLoading } from "./styles";

import calendarIcon from '../../../assets/calendar.png';
import { FlatList, ScrollView } from "react-native-gesture-handler";

import DateTimePicker from '@react-native-community/datetimepicker';

import { TextInputMask } from 'react-native-masked-text'

interface ListPorps{
    id: number
}

function ScalePage(){
    // const [date, setDate] = useState(new Date());
    const [dateAte, setDateAte] = useState(new Date());
    const [open, setOpen] = useState(false)
    const [dateText, setDateText] = useState('');
    const [dateTextAte, setDateTextAte] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate)
  };

  const onChangeDateAte = () => {
    setIsLoading(true)
        setTimeout(() => {
            setShowRegistros(true)
            setIsLoading(false)
        }, 2000);
    };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    const [showRegistros, setShowRegistros] = useState(false);

    const list = [{id:1},{id:2},{id:3}];

    return(
        <>
            <Header 
                title="Escala"
                backButton={true}
            />

            <Title>Selecione o período da pesquisa:</Title>

            <ContainerRow>
                <Label>De:</Label>
                <CalendarButton
                    onPress={()=>setOpen(true)}
                >
                    <CalendarIcon 
                        source={calendarIcon}
                    />
                </CalendarButton>
            </ContainerRow>

            <View style={styles.dateIosContainer}>
                    <TextInputMask
                        type={'datetime'}
                        placeholder="Escreva a data"
                        style={styles.dateInput}
                        onChangeText={(text)=>setDateText(text)}
                        value={dateText}
                    />
            </View>

            <ContainerRowAté>
                <Label>Até:</Label>
                <CalendarButton
                    onPress={()=>setOpen(false)}
                >
                    <CalendarIcon 
                        source={calendarIcon}
                    />
                </CalendarButton>
            </ContainerRowAté>

            <View style={styles.dateIosContainerAte}>
                <TextInputMask
                    type={'datetime'}
                    placeholder="Escreva a data"
                    style={styles.dateInput}
                    onChangeText={(text)=>setDateTextAte(text)}
                    value={dateTextAte}
                />
            </View>

            <SearchButton
                onPress={()=>onChangeDateAte()}
            >
                <TextDate>Pesquisar</TextDate>
            </SearchButton> 

            {isLoading ? (
                <ViewLoading>
                    <ActivityIndicator color="#F1DA61" />
                </ViewLoading>
            ) : (<></>)}
            {showRegistros ? (
                <RegistrosContainer>
                    <RegistrosTitle>Total de registros: 3</RegistrosTitle>

                    {/* <FlatList 
                        data={list}
                        key={list.id}
                        renderItem={()=><RecordsCard />}
                    /> */}

                    <ScrollView>
                        <RecordsCard />
                        <RecordsCard />
                        <RecordsCard />
                    </ScrollView>
                </RegistrosContainer>
            ) : (<></>)}
        </>
    )
}

const styles = StyleSheet.create({
    dateIosContainer:{
        width: '30%',
        marginLeft: '25%',
        marginTop: '-6.5%'
    },
    dateIosContainerAte:{
        width: '30%',
        marginLeft: '25%',
        marginTop: '-6.5%'
    },
    dateIos:{
        marginTop: '-12%',
        marginLeft: '-50%'
        // marginTop: '50%'
    },
    dateIosAte:{
        marginTop: '-12%'
    },
    dateInput:{
        backgroundColor: `${colors.input}`,
        color: `${colors.text}`,
        paddingLeft: 10,
        borderRadius: 8,
        
        // width: '30px',
        // height: '10px'
    }
})

export default ScalePage;