import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from '../components/Button';
import {Ionicons} from "@expo/vector-icons";


import { patientsApi } from '../utils/api';

const AddPatientScreen = ({ navigation }) => {
    const [values, setValues] = useState({});

    const handleChange = (name, e) => {
      const text = e.nativeEvent.text;

      setValues({
        ...values,
        [name]: text
      });
    }

    const onSubmit = () => {
      patientsApi.add(values).then(() => {
        navigation.navigate('Home');
        alert('OK')
      }).catch(() => {
        alert('BAD')
      });
    }

    return (
        <Container >
          <Content refreshing style={{ width: '96%', paddingLeft: '2%', paddingRight: '2%' }}>
            <Form style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <Item style={{ marginLeft: 0 }} floatingLabel>
                <Label>Имя и фамилия</Label>
                <Input 
                  onChange={handleChange.bind(this, 'fullname')}
                  value={values.fullname} 
                  autoFocus 
                  style={{ marginTop: 15 }} 
                />
              </Item>
              <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Номер телефона</Label>
                <Input 
                  onChange={handleChange.bind(this, 'phone')}
                  value={values.phone} 
                  keyboardType='phone-pad'
                  dataDetectorTypes='phoneNumber' 
                  autoFocus  
                  style={{ marginTop: 15 }} 
                />
              </Item>
              <Item style={{ display: 'flex', justifyContent: 'center', borderBottomWidth: 0 }}>
                    <Button 
                      onPress={onSubmit}
                      style={{ 
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#87CC6F",
                        marginTop: 30,
                        borderRadius: 20,
                      }}
                    >
                        <Ionicons name="ios-add" size={28} color="#fff" />
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: '800', textAlign: 'center', marginLeft: '5%'}}>
                            Добавить пациента
                        </Text>
                    </Button>
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