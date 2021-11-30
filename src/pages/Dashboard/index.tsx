import React, { useState, useEffect } from 'react';

import { View, Image } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { ContainerCards, ContainerCardsRow, Icon, TitleCard } from './style';

import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import iconCar from '../../../assets/car.png';
import scaleIcon from '../../../assets/scale.png';
import autoIcon from '../../../assets/auto.png'

import { useNavigation } from '@react-navigation/core';



const Dashboard: React.FC = () => {
  const route = useNavigation();

  function handleNavigationVehicles(){
    route.navigate('Vehicles');
  }

  return (
    <View>
      <Header 
        title="Dashboard"
      />

      <ScrollView
        contentContainerStyle={styles.scrollView}>
        <Card
          imageCard={iconCar}
          titleCard="Veiculos"
          textCard="Consultar Veiculos"
          onPress={handleNavigationVehicles}
        />

        <Card
          imageCard={scaleIcon}
          titleCard="Escala"
          textCard="Consultar escala por período"
          onPress={()=>route.navigate('ScalePage')}
        />

        <Card
          imageCard={autoIcon}
          titleCard="Auto"
          textCard="Consultar auto de infração"
          onPress={()=>route.navigate('InfringementPage')}
        />

        <Card
          imageCard={iconCar}
          titleCard="Veiculos"
          textCard="Consultar Veiculos"
        />
        
        <Card
          imageCard={iconCar}
          titleCard="Veiculos"
          textCard="Consultar Veiculos"
        />

      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginTop: '15%',
    alignItems: 'center'
  },
});

export default Dashboard;