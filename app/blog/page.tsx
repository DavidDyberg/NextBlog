'use client'
import styled from "styled-components"
import ShowPosts from "@/components/showPosts"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "@/api-routes/posts"
import { LoadingSpinner, LoadingSpinnerWrapper } from "@/components/loadingSpinner"

const BlogTitle = styled.h1`
  margin-left: 10px;
`

const Main = styled.main`
  margin-left: 40px;

  @media (max-width: 900px) {
        margin:0;
    }
`

const ErrorMessage = styled.p`
  color: red;
  margin-left: 10px;
`

export default function Blog() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['ShowAllPostsQuery'],
    queryFn: getAllPosts
  })

  if(isLoading) return <LoadingSpinnerWrapper><LoadingSpinner height={80} width={80} color="black"/></LoadingSpinnerWrapper> 
  if(isError) return <ErrorMessage>Error loading posts</ErrorMessage>

  return (
    <Main> 
        <BlogTitle>Blog</BlogTitle>
        {posts?.map((post) => (
          <ShowPosts key={post.id} post={post} />
        ))}
    </Main>
  )
}