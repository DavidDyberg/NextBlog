'use client'

import supabase from "@/lib/supabaseClient"
import type { Post } from "@/lib/type-collections"
import { useCallback, useEffect, useState } from "react"
import Test from "./post"

export default function Home() {
  const [posts, setPosts] = useState<Post []>([])

  const fetcher = useCallback(async () => {
    const { data, error } = await supabase.from("posts").select('*');

    if (error) {
      console.log('error:', error);
    } else {
      setPosts(data)
    }
  }, [])

  useEffect(() => {
    fetcher()
  }, [fetcher])

  return (
    
    <main> 
        <h1>Home</h1>
        <p>
        {posts.map((post) => (
          <Test key={post.id} post={post} />
        ))}
      </p>
        
        
    </main>
  )
}
