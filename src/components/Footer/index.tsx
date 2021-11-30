import React from "react";

import { ButtonIcon, Container, LogOutButton, SettingsButton, TextButton } from "./styles";

import logOutIcon from '../../../assets/logOut.png';
import settingsIcon from '../../../assets/settings.png'

function Footer(){
    return(
        <Container>
            <LogOutButton>
                <ButtonIcon 
                    source={logOutIcon}
                />
                <TextButton>Sair</TextButton>
            </LogOutButton>
            <SettingsButton>
                <ButtonIcon 
                    source={settingsIcon}
                />
                <TextButton>Preferências</TextButton>
            </SettingsButton>
        </Container>
    )
}

export default Footer;