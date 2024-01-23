'use client'
import styled from "styled-components"
import { Pencil } from 'lucide-react';

export const SinglePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    @media (max-width: 900px) {
        margin: 20px;
    }
`

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BodyText = styled.p`
    max-width: 500px;
    line-height: 1.5;

    @media (max-width:500px) {
        width: 300px;
    }
`

export const CreatedAtWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width:500px) {
        flex-direction: column;
        text-align: start;
    }
`

export const CreatedAt = styled.p`
    font-size: 18px;
    font-weight: bold;
`

export const Date = styled.p`
    color: grey;
`

export const EditIcon = styled(Pencil)`
    margin-right: 10px;
    color: black;

    &:hover {
        color: green;
    }
`