import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 сентября</GroupTitle>
        <GroupItem>
          <Avatar source={{
            uri: 'https://sun9-44.userapi.com/impf/rg7aBwI3cCLSAKnFPi11rJ2NXdLfPih6jggIUQ/b_fAGz160iQ.jpg?size=200x0&quality=90&crop=0,0,1333,1333&sign=213d37a2d691a67fa3249e2bd2435f52&ava=1'
          }} />
          <View style={{ flex: 1 }}>
            <FullName>Марина Алейникова</FullName>
            <GrayText>пульпит, удаление зуба</GrayText>
          </View>
          <GroupDate>12:30</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}

const GroupDate = styled.Text`
   border-radius: 18px;
   background: #e9f5ff;
   font-weight: 600;
   color: #4294ff;
   font-size: 14px;
   width: 70px;
   text-align: center;
   display: flex;
   align-items: center;
   padding: 1%;
`;

const GrayText = styled.Text`
 font-size: 16px;
 color: #8b979f;
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

const GroupItem = styled.View`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
`;

const GroupTitle = styled.Text`
   font-weight: 800;
   font-size: 22px;
   color: #000;
`;

const Group = styled.View`
    padding: 0 20px;
`;

const Container = styled.View`
  flex: 1;
margin-top: 50px;
`;
