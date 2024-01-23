'use client'

import styled from "styled-components"

export const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const MainContentContainer = styled.div`
    border: 1px solid black;
    min-height: 60vh;
    margin: 50px;
    display: grid;
    grid-template-columns: 0fr 1fr;
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