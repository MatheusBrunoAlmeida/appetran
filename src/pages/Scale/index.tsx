import React, { useState } from "react";

import { DatePickerIOS, DatePickerAndroid, View, StyleSheet, ActivityIndicator} from 'react-native'

import Header from "../../components/Header";
import RecordsCard from '../../components/CardRecords';

import { CalendarButton, CalendarIcon, ContainerRow, ContainerRowAté, Label, RegistrosContainer, RegistrosTitle, Title } from "./styles";

import calendarIcon from '../../../assets/calendar.png';
import { FlatList, ScrollView } from "react-native-gesture-handler";

interface ListPorps{
    id: number
}

function ScalePage(){
    const [date, setDate] = useState(new Date());
    const [dateAte, setDateAte] = useState(new Date());
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [showRegistros, setShowRegistros] = useState(false);

    const list = [{id:1},{id:2},{id:3}];

    function handleDateChange(data){
        setIsLoading(true)
        setTimeout(() => {
            setShowRegistros(true)
            setDateAte(data)
            setIsLoading(false)
        }, 2000);
    }

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
                <DatePickerIOS 
                        date={date}
                        onDateChange={setDate}
                        mode={'date'}
                        style={styles.dateIos}
                />

                {/* <DatePickerAndroid 
                    date={date}

                /> */}
            </View>

            <ContainerRowAté>
                <Label>Até:</Label>
                <CalendarButton
                    onPress={()=>setOpen(true)}
                >
                    <CalendarIcon 
                        source={calendarIcon}
                    />
                </CalendarButton>
            </ContainerRowAté>

            <View style={styles.dateIosContainer}>
                <DatePickerIOS 
                        date={dateAte}
                        mode={'date'}
                        style={styles.dateIos}
                        onDateChange={(date)=>handleDateChange(date)}
                />

                {/* <DatePickerAndroid 
                    date={date}

                /> */}
            </View>

            {isLoading ? (
                <ActivityIndicator />
            ) : (<></>)}
            {showRegistros ? (
                <RegistrosContainer>
                    <RegistrosTitle>Total de registros: 3</RegistrosTitle>

                    <FlatList 
                        data={list}
                        key={list.id}
                        renderItem={()=><RecordsCard />}
                    />

                    {/* <ScrollView>
                        <RecordsCard />
                        <RecordsCard />
                        <RecordsCard />
                    </ScrollView> */}
                </RegistrosContainer>
            ) : (<></>)}
        </>
    )
}

const styles = StyleSheet.create({
    dateIosContainer:{
        marginTop: '-30%',
        marginLeft: '-3%',
        width: '60%',
    },
    dateIos:{

    }
})

export default ScalePage;