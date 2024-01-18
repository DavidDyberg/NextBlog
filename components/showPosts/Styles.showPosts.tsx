'use client'
import Link from "next/link"
import styled from "styled-components"

export const PostLink = styled(Link)`
    text-decoration: none;
`

export const PostsContainer = styled.div`
    border: 1px solid rgb(203 213 225);
    border-radius: 6px;
    margin: 10px 10px;

    &:hover {
        background:rgb(203 213 225);
        border: 1px solid black;
        box-shadow: 5px 6px 5px lightgray;
    }
`

export const Title = styled.h3`
    color: black;
    margin: 10px;
`

export const CreatedAt = styled.p`
    color:grey ;
    margin: 10px;
`