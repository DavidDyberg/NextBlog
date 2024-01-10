'use client'

import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; }>`

    background: ${props => props.$primary ? "#5F9EA0" : "white"};
    color: ${props => props.$primary ? "white" : "#5F9EA0" }; 

    font-size: 16px;
    margin: 1em;
    padding: 5px 20px;
    border: 2px solid #5F9EA0;
    border-radius: 3px;
    cursor: pointer;
    transition: padding 0.1s ease-in-out;

    &:hover {
        padding: 6px 22px;
        
    }
`