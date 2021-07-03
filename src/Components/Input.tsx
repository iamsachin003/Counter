import React from 'react';
import styled from 'styled-components';

type InputProps = {
    type: string,
    value: number,
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
    width: 60px;
    background-color: #ffe6ea;
    border: 1px solid #B24242;
    padding: 10px;
    font-size: 22px;
    color: #B24242;
    font-weight: bolder;
    text-align: center
`;

const Input = ({ type, inputChange, ...rest }: InputProps) => {
    return (
        <StyledInput type={type} onChange={inputChange} {...rest}></StyledInput>
    )
}

export default Input;
