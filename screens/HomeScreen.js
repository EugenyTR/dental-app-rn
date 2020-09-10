import React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';
import {Appointment, SectionTitle} from "../components";

import {Ionicons} from "@expo/vector-icons";

import styled from "styled-components/native/dist/styled-components.native.esm";

const DATA = [
    {
        title: "10 сентября",
        data: [
            {
                time: '15:30',
                diagnosis: 'пульпит',
                active: true,
                user: {
                    fullname: 'Лира Тычинина',
                    avatar: 'https://sun9-34.userapi.com/impf/c630323/v630323197/f826/grXRqu7chgU.jpg?size=100x0&quality=88&crop=24,0,718,718&sign=4db7b1d044dbee2e4295bda5aae5b2a6&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                active: true,
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            }
        ],
    },
    {
        title: "16 сентября",
        data: [
            {
                time: '15:30',
                diagnosis: 'пульпит',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-12.userapi.com/impf/c841036/v841036363/2b15c/WNO3MxcSVOM.jpg?size=100x0&quality=88&crop=0,68,399,399&sign=a71bace140efd40cda603419ca45af9e&ava=1',
                }
            }
        ]
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
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
            >
                <Ionicons name="ios-add" size={36} color="#fff" />
            </PlusButton>
        </Container>
    );
};

HomeScreen.navigationOptions = {
    title: 'Пациенты',
    headerTintColor: '#2a86ff',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.5,
    }
};

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
