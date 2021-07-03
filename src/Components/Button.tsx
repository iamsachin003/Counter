import React, { ReactNode } from 'react';
import styled from "styled-components";


interface ButtonProps {
    type: 'button' | 'submit',
    children: ReactNode,
    color: string,
    backgroundColor: string,
    borderRadius: string,
    onButtonChange: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
    background-color: ${(props: ButtonProps) => props.backgroundColor};
    color: ${(props: ButtonProps) => props.color};
    cursor: pointer;
    padding: 10px;
    width: 60px;
    font-size: 22px;
    border: 1px solid #B24242;
    border-radius: ${(props: ButtonProps) => props.borderRadius};
    font-weight: bolder
`

const Button = ({ children, onButtonChange, ...rest }: any) => {
    return (
        <StyledButton onClick={onButtonChange} {...rest} >
            {children}
        </StyledButton>
    )
}

export default Button;
