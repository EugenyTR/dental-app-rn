import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";

export default styled.Text`
   background: ${props => (props.active ? '#2a86ff' : '#e9f5ff')};
   color: ${props => (props.active ? '#fff' : '#4294ff')};
   border-radius: 18px;
   font-weight: 600;
   font-size: 14px;
   width: 70px;
   text-align: center;
   display: flex;
   align-items: center;
   padding: 1%;
`;
