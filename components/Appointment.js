import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import GrayText from "./GrayText";
import Badje from "./Badje";

import getAvatarColor from '../utils/getAvatarColor';

const Appointment = ({ navigate, item }) => {
    const {patient, diagnosis, active, time} = item;
    const avatarColors = getAvatarColor(patient.fullname[0].toUpperCase());
    return (
                <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
                    <Avatar style={{backgroundColor: avatarColors.background}}>
                        <Letter style={{color: avatarColors.color}}>{patient.fullname[0].toUpperCase()}</Letter>
                    </Avatar>
                    <View style={{ flex: 1 }}>
                        <FullName>{patient.fullname}</FullName>
                        <GrayText>{diagnosis}</GrayText>
                    </View>
                    <Badje active={active}>{time}</Badje>
                </GroupItem>
    );
}

Appointment.defaultProps = {
    groupTitle:'untitled',
     items: [],
}

const Letter = styled.Text`
font-size: 20px;
font-weight: 700;
`;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Avatar = styled.View`
align-items: center;
justify-content: center;
border-radius: 50px;
width: 60px;
height: 60px;
margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  borderBottomWidth: 1px;
  borderBottomColor: #f3f3f3;
`;

export default Appointment;
