import React, { useState } from "react";

import Header from "../../components/Header";
import { Label } from "../Vehicles/styles";
import { ContainerRow, InputBoard, SearchButton, SearchIcon } from "./styles";

import searchIcon from '../../../assets/searchIcon.png'
import { RegistrosTitle } from "../Scale/styles";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet } from "react-native";
import RecordsCard from "../../components/CardRecords";
import TrafficLightsCard from "../../components/CardTrafficLights";

function QueryTrafficLightsPage(){
    const [showIonfo, setShowInfo] = useState(false);
    const [semafro, setSemafro] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    function handleSearch(){
        setIsLoading(true)
        if(semafro != ''){
            setTimeout(() => {
                setShowInfo(true);
                setIsLoading(false)
            }, 200);
        }else{
            setTimeout(() => {
                setIsLoading(false)
            }, 200);
        }
    }

    function handleNewSearch(){
        setShowInfo(false)
        setSemafro('')
    }
    return(
        <>
             <Header 
                title="Semáfros"
                backButton={true}
            />

            <Label>Digite o numéro ou endereço do semáfro:</Label>
            <ContainerRow>
                <InputBoard 
                    onChangeText={(text)=>setSemafro(text)}
                    value={semafro}
                />
                <SearchButton
                    onPress={()=>handleSearch()}
                >
                    <SearchIcon 
                        source={searchIcon}
                    />
                </SearchButton>
            </ContainerRow>

            {isLoading ? (<ActivityIndicator />) : (<></>)}

            {showIonfo ? (
                <>
                    <RegistrosTitle>Total de registros: 6</RegistrosTitle>

                    <ScrollView
                       contentContainerStyle={styles.scrollView}
                    >
                       <TrafficLightsCard />
                       <TrafficLightsCard />
                       <TrafficLightsCard />
                       <TrafficLightsCard />
                       <TrafficLightsCard />
                       <TrafficLightsCard />
                    </ScrollView>
               </>
            ) : (<></>)}
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      marginTop: '4%',
    },
  });

export default QueryTrafficLightsPage;