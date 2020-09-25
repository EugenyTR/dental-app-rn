import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";

const Button = ({ children, color, onPress }) => {
    return (
        <ButtonWrapper onPress={onPress} color={color}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    );
}

Button.defaultProps = {
  color: '#2a86ff'
};

const ButtonWrapper = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
background: ${props => props.color};
text-align: center;
height: 45px;
color: #fff;
`;

const ButtonText = styled.Text`
color: #fff;
font-weight: 600;
font-size: 16px;
`;

export default Button;
