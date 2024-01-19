'use client'

import { editPost } from '@/api-routes/posts'
import * as Styles from '@/app/create-post/Styles.createPost'
import { Button } from '@/styles/button'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function EditPost ({ params } : { params: { id: string } } ) {
    const [title, setTitle] = useState<string>()
    const [body, setBody] = useState<string>()
    const [error, setError] = useState<any>(null)

    const router = useRouter()

    const { id } = params

    const editPostMutation = useMutation({
        mutationKey: ['editPost'],
        mutationFn: editPost,
        onSuccess: () => {
            setError(null)
            router.push('/' + id )
        },
        onError: (error) => {
            setError(error.message);
          },
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!title || !body) {
            setError('Fill in all the fields')
            return;
        }
        
        editPostMutation.mutate({title, body, id})
    }

    return(
        <div>
            <h2>Edit Post</h2>
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

                <Button>Edit</Button>

            </Styles.Form>
        </div>
    )
}