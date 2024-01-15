'use client'

import supabase from "@/lib/supabase-client"
import type { Post } from "@/lib/type-collections"
import { useCallback, useEffect, useState } from "react"
import ShowPosts from "@/components/showPosts"
import { useQuery } from "@tanstack/react-query"

export default function Home() {
  const { data: posts } = useQuery<Post[]>({
    queryKey: ['ShowAllPostsQuery'],
    queryFn: async () => {
      const {data} = await supabase
      .from('posts')
      .select()
      .order('created_at', {ascending: false})

      return data as Post[]
    },
    
  })

  return (
    
    <main> 
        <h1>Blog</h1>
        <p>
        {posts?.map((post) => (
          <ShowPosts key={post.id} post={post} />
        ))}
      </p>
    </main>
  )
}
