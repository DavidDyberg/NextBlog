'use client'

import supabase from "@/lib/supabase-client"
import type { Post, User } from "@/lib/type-collections"
import { useCallback, useEffect, useState } from "react"
import Test from "./testfetch"

export default function Home() {
  const [posts, setPosts] = useState<User []>([])

  const fetcher = useCallback(async () => {
    const { data, error } = await supabase.from("users").select('*'); 
    console.log(error, data)

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
        {posts.map((user) => (
          <Test key={user.id} user={user} />
        ))}
      </p>
        
        
    </main>
  )
}
