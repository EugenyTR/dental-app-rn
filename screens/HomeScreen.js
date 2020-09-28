import React, { useState, useEffect } from 'react';
import {View, Text, SectionList, StyleSheet, Animated} from 'react-native';
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native/dist/styled-components.native.esm";
import axios from 'axios';
import Swipeable from 'react-native-swipeable-row';

import {appointmentsApi} from '../utils/api';

const HomeScreen = ({ navigation }) => {
       const [data, setData] = useState(null);
       const [isLoading, setIsLoading] = useState(false);

       const fetchAppointments = () => {
            setIsLoading(true);
            appointmentsApi.get().then(({ data }) => {
                 setData(data.data);
                 setIsLoading(false);
             })
             .catch(e => { 
                setIsLoading(false);
             });
           }

       useEffect(fetchAppointments, []);

        return (
            <Container>
                {data && <SectionList
                    sections={data}
                    keyExtractor={(item, index) => index}
                    onRefresh={fetchAppointments}
                    refreshing={isLoading}
                    renderItem={({ item }) => (
                        <Swipeable rightButtons={[
                            <SwipeView>
                                <Text>Left</Text>
                                <Text>Right</Text>
                            </SwipeView>
                        ]}
                        >
                            <Appointment navigate={navigation.navigate} item={item} />
                        </Swipeable>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <SectionTitle>{title}</SectionTitle>
                    )}
                />}
                <PlusButton style={
                    {shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 6,}
                }
                onPress={navigation.navigate.bind(this, 'AddPatient')}
                >
                    <Ionicons name="ios-add" size={36} color="#fff" />
                </PlusButton>
            </Container>
    )
};

HomeScreen.navigationOptions = {
    title: 'Пациенты',
    headerTintColor: '#2a86ff',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.5,
    }
};

const SwipeView = styled.View`

`;

const PlusButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
border-radius: 50px;
width: 64px;
height: 64px;
background: #2a86ff;
position: absolute;
right: 15px;
bottom: 15px;
`;

const Container = styled.View`
 flex: 1;
`;

export default HomeScreen;
