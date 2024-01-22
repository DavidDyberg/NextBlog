'use client'

import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
    border-bottom: 2px rgb(203 213 225) solid;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled(Link)`
    margin-left: 38px;
    text-decoration: none;
    color: black;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px) {
        margin: 0;
    }
` 