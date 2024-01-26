'use client'
import styled from "styled-components"
import { BallTriangle } from "react-loader-spinner"

export const LoadingSpinnerWrapper = styled.div`
    margin: 10px;
`

export const LoadingSpinner = styled(BallTriangle)`
   color: black;
`