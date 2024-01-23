'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/styles/button"
import { FormEvent, useRef } from "react"
import * as Styles from '@/app/create-post/Styles.createPost'
import { createPost } from "@/api-routes/posts"
import { useMutation } from "@tanstack/react-query"

export default function CreatePost () {
    const router = useRouter()
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)

    const {mutate, error, status} = useMutation({
        mutationKey:['CreatePostMutation'],
        mutationFn:createPost,
        onSuccess: () => {
            router.push('/blog')
        }
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        mutate({
            title: titleRef.current!.value,
            body: bodyRef.current!.value,
        })
    }
    
    return (
        <div>
            {status === "error" && JSON.stringify(error)}
            <Styles.Title>Create Post</Styles.Title>
            <Styles.Form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <Styles.Input 
                    type="text"
                    id="title"
                    ref={titleRef}
                />
                <label htmlFor="body">Body:</label>
                <Styles.Input 
                    type="text"
                    id="body"
                    ref={bodyRef}
                />
                <Button>Create Post</Button>
            </Styles.Form>
        </div>
    )
}
