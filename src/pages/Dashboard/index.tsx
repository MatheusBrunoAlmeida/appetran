import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { ContainerCards, ContainerCardsRow } from './style';



const Dashboard: React.FC = () => {

  return (
    <View>
      <Header 
        title="Dashboard"
      />

      <ContainerCards>
        <ContainerCardsRow> 
          <Card></Card>

          <Card></Card>
        </ContainerCardsRow>

        <ContainerCardsRow> 
          <Card></Card>

          <Card></Card>
        </ContainerCardsRow>
        
        <ContainerCardsRow> 
          <Card></Card>

          <Card></Card>
        </ContainerCardsRow>
      </ContainerCards>
    </View>
  );
};

export default Dashboard;