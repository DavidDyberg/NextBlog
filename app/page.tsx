'use client'
import styled from "styled-components"

const Title = styled.h1`

  @media (max-width: 500px) {
    margin-top: 20px;
    font-size: 26px;
  }
`

const InfoText = styled.p`
  max-width: 500px;
  font-size: 20px;
  margin-left: 52px;

  @media (max-width: 500px) {
    margin:0;
    margin-top: 20px;
    font-size: 16px;
  }
`

const Wrapper = styled.div`
  margin-left: 20px;

  @media (max-width: 500px) {
    margin:0;
  }
`

export default function Home() {
  
  return (
    <main> 
      <Wrapper>
        <Title>🌟 Welcome to NextBlog! 🌟</Title>
        <InfoText>Feel free to read and discover the fascinating world of NextBlog with us. We also invite you to become a part of our community by creating your own blog posts.</InfoText>
      </Wrapper>
    </main>
  )
}
