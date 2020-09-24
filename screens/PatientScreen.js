import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Foundation, AntDesign, Ionicons} from "@expo/vector-icons";

import { GrayText, Button, Badje } from "../components";

const PatientScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <PatientDetails>

                <PatientCardHeaderWrapper>
                    <Avatar source={{
                        uri: navigation.getParam('user', {}).avatar,
                        }} />
                    <PatientCardNameTelephoneWrapper>
                        <PatientFullName>{navigation.getParam('user', {}).fullname}</PatientFullName>
                        <GrayText>{navigation.getParam('user', {}).phone}</GrayText>
                    </PatientCardNameTelephoneWrapper>
                </PatientCardHeaderWrapper>

                    <PatientButtons>
                        <FormulaButtonView>
                            <Button>Формула зубов</Button>
                        </FormulaButtonView>
                        <PhoneButtonView>
                            <Button color="#84D269"><Foundation name="telephone" size={24} color="#fff" /></Button>
                        </PhoneButtonView>
                    </PatientButtons>

            </PatientDetails>

            <PatientAppointments>
                <Container>
                    <AppointmentCard>
                        <MoreButton>
                            <Ionicons name="md-more" size={36} color="#a3a3a3" />
                        </MoreButton>
                        <AppointmentCardRow>
                            <AntDesign name="medicinebox" size={24} color="#a3a3a3" />
                            <AppointmentCardLabel>Зуб: <Text style={{ fontWeight: '600' }}>12</Text></AppointmentCardLabel>
                        </AppointmentCardRow>
                        <AppointmentCardRow>
                            <Foundation name="clipboard-notes" size={24} color="#a3a3a3" />
                            <AppointmentCardLabel>Диагноз: <Text style={{ fontWeight: '600' }}>пульпит</Text></AppointmentCardLabel>
                        </AppointmentCardRow>
                        <AppointmentCardRow style={{ marginTop: 20, justifyContent: 'space-between' }}>
                            <Badje style={{ width: 150 }}active>11.01.2020 - 15:20</Badje>
                            <Badje color={{
                                backgound: "green",
                                color: "greedn"
                            }}>1500 P</Badje>
                        </AppointmentCardRow>
                    </AppointmentCard>
                </Container>
            </PatientAppointments>
        </View>
    );
};

const MoreButton = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 25px;
top: 25px;
`;

const PatientCardNameTelephoneWrapper = styled.View`
flex-direction: column;
`;

const PatientCardHeaderWrapper = styled.View`
    flex-direction: row;
`;

const AppointmentCardLabel = styled.Text`
font-size: 16px;
margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
flex-direction: row;
align-items: center;
margin-top: 8px;
margin-bottom: 8px;
`;

const AppointmentCard = styled.View`
   shadow-color: gray;
shadow-opacity: 0.7;
elevation: 0.5;
padding: 12px 20px;
border-radius: 10px;
background: white;
`;

const Avatar = styled.Image`
border-radius: 50px;
width: 60px;
height: 60px;
margin-right: 15px;
`;

const Container = styled.View`
flex: 1;
padding: 25px;
`;

const PatientDetails = styled(Container)`
flex: 0.3;
`;

const PatientAppointments = styled.View`
flex: 1;
background: #f8fafd;
`;

const FormulaButtonView = styled.View`
flex: 1;
`;

const PhoneButtonView = styled.View`
margin-left: 10px;
width: 45px;
`;


const PatientButtons = styled.View`
flex: 1;
flex-direction: row;
margin-top: 20px;
`;

const PatientFullName = styled.Text`
font-weight: 800;
font-size: 24px;
line-height: 30px;
margin-bottom: 5px;
`;

PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2a86ff',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.5,
    }
};

export default PatientScreen;
