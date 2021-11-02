import React, { useState, useEffect } from 'react';

import { View, Image } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import carIcon from '../../../assets/car.png';

import { ContainerCards, ContainerCardsRow, Icon, TitleCard } from './style';



const Dashboard: React.FC = () => {

  return (
    <View>
      <Header 
        title="Dashboard"
      />

      <ContainerCards>
        <ContainerCardsRow> 
          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>

          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>
        </ContainerCardsRow>

        <ContainerCardsRow> 
          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>

          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>
        </ContainerCardsRow>
        
        <ContainerCardsRow> 
          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>

          <Card>
            <Icon source={carIcon} />
            <TitleCard>Veiculos</TitleCard>
          </Card>
        </ContainerCardsRow>
      </ContainerCards>
    </View>
  );
};

export default Dashboard;