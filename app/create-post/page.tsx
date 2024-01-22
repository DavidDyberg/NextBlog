'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/styles/button"
import { useState } from "react"
import * as Styles from '@/app/create-post/Styles.createPost'
import { createPost } from "@/api-routes/posts"
import { useMutation } from "@tanstack/react-query"

export default function CreatePost () {
    const [title, setTitle] = useState<string>()
    const [body, setBody] = useState<string>()
    const [error, setError] = useState<any>(null)

    const router = useRouter()

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            setError(null)
            router.push('/blog')
        },
        onError: (error) => {
            setError(error.message);
          },
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!title || !body) {
            setError('Please fill in all the fields')
            return;
        }
        
        createPostMutation.mutate({title, body})
    }

    return (
        <div>
            <Styles.Title>Create Post</Styles.Title>
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
