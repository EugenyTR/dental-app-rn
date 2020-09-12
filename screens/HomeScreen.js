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
                    phone: '+7-913-000-00-01',
                    fullname: 'Кира Найтли',
                    avatar: 'https://sun9-65.userapi.com/impf/c627623/v627623664/46a/RcOFoncWI8Y.jpg?size=100x0&quality=88&crop=40,189,878,878&sign=efb44e032708bb694e0b920b9b704158&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    phone: '+7-913-000-00-02',
                    fullname: 'Шарлиз Терон',
                    avatar: 'https://sun9-39.userapi.com/impf/LABvoQLBbsJoZmFKXjvUq4XePCw6lq_9KAsjIw/mtYUsaq-Npc.jpg?size=100x0&quality=88&crop=190,190,984,984&sign=ee89ea65825ad985c8e44270a918ecc5&ava=1',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                active: true,
                user: {
                    phone: '+7-913-000-00-03',
                    fullname: 'Сальма Хайек',
                    avatar: 'https://sun9-52.userapi.com/impf/c308627/v308627931/1495/HAXloDlURO4.jpg?size=100x0&quality=88&crop=0,503,1400,1400&sign=05c76daba979b010df4d18df04bdc91f&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    phone: '+7-913-000-00-04',
                    fullname: 'Найоми Кэмпбел',
                    avatar: 'https://sun9-38.userapi.com/impg/bcr6a2b3Oevb_JQqmzgCgczW01-cGpl1f0I2TA/m1WemtO1oFY.jpg?size=100x0&quality=88&crop=113,148,551,551&sign=3b9879609d2ec8aa9cc228529ac79794&ava=1',
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
                    phone: '+7-913-000-00-05',
                    fullname: 'Ева Грин',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Evagreen2_%283%29.jpg/338px-Evagreen2_%283%29.jpg',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    phone: '+7-913-000-00-06',
                    fullname: 'Sarah Young',
                    avatar: 'https://image.tmdb.org/t/p/w1280/qtbAuIiNgPw9J868SXEZzKyrjhX.jpg',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                user: {
                    phone: '+7-913-000-00-07',
                    fullname: 'Марина Алейникова',
                    avatar: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=100x0&quality=88&crop=133,133,1066,1066&sign=48fcf5c79ce36bcec6e6b9d3029c54bb&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    phone: '+7-913-000-00-08',
                    fullname: 'Мариня Викторова',
                    avatar: 'https://sun9-50.userapi.com/impg/jaZ5Ua8cucsSTvCC03rQ7EsEeW4vrPoULNGbyA/4Fgo-y1m6tE.jpg?size=100x0&quality=88&crop=0,189,1620,1620&sign=3dc05f0cf824f47431308cd89b3f3634&ava=1',
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
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
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
