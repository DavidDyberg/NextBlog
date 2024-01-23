'use client'
import styled from "styled-components"
import supabase from "@/lib/supabase-client"
import type { Post } from "@/lib/type-collections"
import ShowPosts from "@/components/showPosts"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "@/api-routes/posts"

const BlogTitle = styled.h1`
  margin-left: 10px;
`

export default function Blog() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['ShowAllPostsQuery'],
    queryFn: getAllPosts
  })

  if(isLoading) return <div>...loading</div>

  return (
    <main> 
        <BlogTitle>Blog</BlogTitle>
        {posts?.map((post) => (
          <ShowPosts key={post.id} post={post} />
        ))}
    </main>
  )
}