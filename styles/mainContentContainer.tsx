'use client'

import styled from "styled-components"

export const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const MainContentContainer = styled.div`
    border: 1px solid black;
    height: 100vh;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: #fae8eb70;
    border-radius: 3px;
    box-shadow: 10px gray;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        margin: 0;
    }
`