'use client'

import styled from "styled-components"

export const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const MainContentContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    border-radius: 3px;
    box-shadow: 10px gray;
    position: relative;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        margin: 5px;
        margin-top: 40px;
        border: none;
    }
`