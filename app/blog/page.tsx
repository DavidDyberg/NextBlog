'use client'
import styled from "styled-components"
import ShowPosts from "@/components/showPosts"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "@/api-routes/posts"

const BlogTitle = styled.h1`
  margin-left: 10px;
`

const Main = styled.main`
  margin-left: 40px;

  @media (max-width: 900px) {
        margin:0;
    }
`

export default function Blog() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['ShowAllPostsQuery'],
    queryFn: getAllPosts
  })

  if(isLoading) return <div>...loading</div>
  if(isError) return <div>Error fetching posts</div>

  return (
    <Main> 
        <BlogTitle>Blog</BlogTitle>
        {posts?.map((post) => (
          <ShowPosts key={post.id} post={post} />
        ))}
    </Main>
  )
}