import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';

const AddPatientScreen = ({ navigation }) => {

    return (
        <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Имя и фамилия</Label>
              <Input style={{ marginTop: 15 }} />
            </Item>
            <Item floatingLabel>
              <Label>Номер телефона</Label>
              <Input style={{ marginTop: 15 }} />
            </Item>
            <Item style={{ display: 'flex' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ backgroundColor: "#87CC6F" }}>
                    <Text style={{color: '#fff', fontSize: 20, fontWeight: '800', textAlign: 'center'}}>
                        Добавить пациента
                    </Text>
                </Button>
                </View>
            </Item>
          </Form>
        </Content>
      </Container>
    );
};

AddPatientScreen.navigationOptions = {
    title: 'Добавить пациента',
    headerTintColor: '#2a86ff',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.5,
    }
};

export default AddPatientScreen;