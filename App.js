import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Appointment, SectionTitle } from "./components";

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
                    avatar: 'https://sun9-50.userapi.com/impg/jaZ5Ua8cucsSTvCC03rQ7EsEeW4vrPoULNGbyA/4Fgo-y1m6tE.jpg?size=100x0&quality=88&crop=0,189,1620,1620&sign=3dc05f0cf824f47431308cd89b3f3634&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=200x0&quality=90&crop=0,0,1333,1333&sign=213d37a2d691a67fa3249e2bd2435f52&ava=1',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                active: true,
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-50.userapi.com/impg/jaZ5Ua8cucsSTvCC03rQ7EsEeW4vrPoULNGbyA/4Fgo-y1m6tE.jpg?size=100x0&quality=88&crop=0,189,1620,1620&sign=3dc05f0cf824f47431308cd89b3f3634&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=200x0&quality=90&crop=0,0,1333,1333&sign=213d37a2d691a67fa3249e2bd2435f52&ava=1',
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
                    avatar: 'https://sun9-50.userapi.com/impg/jaZ5Ua8cucsSTvCC03rQ7EsEeW4vrPoULNGbyA/4Fgo-y1m6tE.jpg?size=100x0&quality=88&crop=0,189,1620,1620&sign=3dc05f0cf824f47431308cd89b3f3634&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=200x0&quality=90&crop=0,0,1333,1333&sign=213d37a2d691a67fa3249e2bd2435f52&ava=1',
                }
            },
            {
                time: '15:30',
                diagnosis: 'пульпит',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-50.userapi.com/impg/jaZ5Ua8cucsSTvCC03rQ7EsEeW4vrPoULNGbyA/4Fgo-y1m6tE.jpg?size=100x0&quality=88&crop=0,189,1620,1620&sign=3dc05f0cf824f47431308cd89b3f3634&ava=1',
                }
            },
            {
                time: '19:30',
                diagnosis: 'вставная челюсть',
                user: {
                    fullname: 'Денис Тычинин',
                    avatar: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=200x0&quality=90&crop=0,0,1333,1333&sign=213d37a2d691a67fa3249e2bd2435f52&ava=1',
                }
            }
        ]
    },
];

export default function App() {
  return (
    <Container>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Appointment {...item} />}
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
}

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
margin-top: 30px;
`;
