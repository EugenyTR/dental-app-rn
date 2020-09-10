import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { GrayText } from "../components";

const Appointment = ({ user, diagnosis, active, time, navigate }) => {
    return (
                <GroupItem onPress={navigate.bind(this, 'Patient')}>
                    <Avatar source={{
                        uri:
                        user.avatar
                    }} />
                    <View style={{ flex: 1 }}>
                        <FullName>{user.fullname}</FullName>
                        <GrayText>{diagnosis}</GrayText>
                    </View>
                    <GroupDate active={active}>{time}</GroupDate>
                </GroupItem>
    );
}

Appointment.defaultProps = {
    groupTitle:'untitled',
     items: [],
}

const GroupDate = styled.Text`
   background: ${props => (props.active ? '#2a86ff' : '#e9f5ff')};
   color: ${props => (props.active ? '#fff' : '#4294ff')};
   border-radius: 18px;
   font-weight: 600;
   font-size: 14px;
   width: 70px;
   text-align: center;
   display: flex;
   align-items: center;
   padding: 1%;
`;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Avatar = styled.Image`
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
