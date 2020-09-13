import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const getColor = ({active, color}) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, 0.21)',
            color: '#618842'
        },
        active: {
            background: '#2a86ff',
            color: '#fff'
        },
        default: {
            background: "#e9f5ff",
            color: "#4294ff"
        }
    }

    if (active) {
        return colors.active
    } else if (color && colors[color]) {
        return colors[color]
    } else {
        return colors.default;
    }
}

export default styled.Text`
   background: ${props => getColor(props).background};
   color: ${props => getColor(props).color};
   border-radius: 18px;
   font-weight: 600;
   font-size: 14px;
   width: 70px;
   text-align: center;
   display: flex;
   align-items: center;
   padding: 1%;
`;
