import React from 'react';
import styled from 'styled-components';

const KeypadLayout: React.FC = () => {
    return (
        <div>
            <Keypad>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number) => (
                    <KeypadButton key={number}>{number}</KeypadButton>
                ))}
                <EmptySpace />
                <KeypadButton key="0">0</KeypadButton>
            </Keypad>
        </div>
    );
};

export default KeypadLayout;

const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
`;

const KeypadButton = styled.button`
    width: 80px; /* 가로가 더 긴 직사각형으로 변경 */
    height: 60px;
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 24px;
    color: #000;
    cursor: pointer;

    &:active {
        background-color: #d0d0d0;
    }
`;

const EmptySpace = styled.div`
    width: 80px; 
    height: 60px;
    background-color: transparent;
`;
