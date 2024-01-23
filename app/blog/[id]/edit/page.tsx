'use client'

import { editPost } from '@/api-routes/posts'
import * as Styles from '@/app/create-post/Styles.createPost'
import { Button } from '@/styles/button'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

export default function EditPost ({ params } : { params: { id: string } } ) {
    const router = useRouter()
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)

    const { id } = params

    const {mutate, error, status} = useMutation({
        mutationKey:['EditPostMutation'],
        mutationFn:editPost,
        onSuccess: () => {
            router.push('/blog/' + id)
        }
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        mutate({
            title: titleRef.current!.value,
            body: bodyRef.current!.value,
            id,
        })
    }

    return(
        <div>
            {status === "error" && JSON.stringify(error)}
            <Styles.Title>
                <Link href={'/blog/' + id}><Styles.BackIcon/></Link>
                Edit Post
            </Styles.Title>
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

                <Button>Edit</Button>
            </Styles.Form>
        </div>
    )
}