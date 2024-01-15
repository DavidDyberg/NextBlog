'use client'

import styled from "styled-components"

export const Form = styled.form`
    background-color: #fff;
    padding: 20px;
    max-width: 480px;
    margin: 0 auto;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    display: block;
    padding: 6px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin: 10px 0px 20px 0px;
`

export const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`