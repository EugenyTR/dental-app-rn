import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import GrayText from "./GrayText";
import Badje from "./Badje";

const Appointment = ({ navigate, item }) => {
    const {user, diagnosis, active, time} = item;
    return (
                <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
                    <Avatar source={{
                        uri:
                        user.avatar
                    }} />
                    <View style={{ flex: 1 }}>
                        <FullName>{user.fullname}</FullName>
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
