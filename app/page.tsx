'use client'

import supabase from "@/lib/supabase-client"
import type { Post } from "@/lib/type-collections"
import { useCallback, useEffect, useState } from "react"
import Test from "./testfetch"

export default function Home() {
  const [posts, setPosts] = useState<Post []>([])

  const getPosts = useCallback(async () => {
    const { data, error } = await supabase
    .from("posts")
    .select('*')
    .order('created_at', {ascending: false})
    console.log(error, data)

    if (error) {
      console.log('error:', error);
    } else {
      setPosts(data)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    
    <main> 
        <h1>Blog</h1>
        <p>
        {posts.map((post) => (
          <Test key={post.id} post={post} />
        ))}
      </p>
    </main>
  )
}
