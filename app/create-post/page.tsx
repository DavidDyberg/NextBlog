'use client'

import { useRouter } from "next/navigation"
import supabase from "@/lib/supabase-client"
import { Button } from "@/styles/button"
import { useState } from "react"
import * as Styles from '@/app/create-post/Styles.createPost'
import { createPost } from "@/api-routes/posts"

export default function CreatePost () {
    const [title, setTitle] = useState<string>()
    const [body, setBody] = useState<string>()
    const [error, setError] = useState<any>(null)

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!title || !body) {
            setError('Fill in all the fields')
            return
        }
        
        createPost({title, body})

        if (error) {
            setError('Fill in all the fields')
        }

        if (createPost) {
            console.log(createPost)
            setError(null)
        }
        router.push('/')
    }

    return (
        <div>
            <h2>Create Post</h2>
            <Styles.Form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <Styles.Input 
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="body">Body:</label>
                <Styles.Input 
                    type="text"
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <Button>Create Post</Button>

                {error && <Styles.ErrorMessage>{error}</Styles.ErrorMessage>}
            </Styles.Form>
        </div>
    )
}
