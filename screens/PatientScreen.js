import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Foundation} from "@expo/vector-icons";

import { GrayText, Button } from "../components";

const PatientScreen = () => {
    return (
        <Container>
            <PatientFullName>Лира Тычинина</PatientFullName>
            <GrayText>8-913-000-22-04</GrayText>
            <PatientButtons>
                <FormulaButtonView>
                    <Button>Формула зубов</Button>
                </FormulaButtonView>
                <PhoneButtonView>
                    <Button color="#84D269"><Foundation name="telephone" size={24} color="#fff" /></Button>
                </PhoneButtonView>
            </PatientButtons>
        </Container>
    );
};

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

const Container = styled.View`
padding: 25px;
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
