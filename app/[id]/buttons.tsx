'use client'

import { Trash2 } from 'lucide-react';
import styled from "styled-components"
import { deletePost } from "@/api-routes/posts"
import { useRouter } from "next/navigation"

const DeletePost = styled.button`
    background: none;
	border: none;
	cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

export const DeleteButton = ({ id } : { id: string }) => {
    const router = useRouter()
    
    const handleDelete = async () => {
        const { error, status } = await deletePost(id)

        if (error) {
            return console.log({ error, status })
        }

        router.push('/')
    }

   return(
    <div>
        <DeletePost onClick={handleDelete}>
            <Trash2 />
        </DeletePost>
    </div>
   )
}