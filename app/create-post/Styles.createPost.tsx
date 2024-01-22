'use client'

import { ChevronLeft } from "lucide-react"
import styled from "styled-components"

export const BackIcon = styled(ChevronLeft)`
    color: black;
    display: flex;

    &:hover {
        color: grey;
    }
`

export const Title = styled.h2`
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    height: 400px;
    background-color: #fff;
    padding: 20px;
    max-width: 480px;
    margin: 0 auto;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(203 213 225);
    border-radius: 3px;
    margin-bottom: 20px;
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
    margin-top: 100px;
`