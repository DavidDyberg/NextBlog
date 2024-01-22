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
    bottom: 15px;
    right: 10px;

    &:hover {
        color: red;
    }

    @media (max-width: 900px) {
        bottom: 35px;
        right: 10px;
    }

    @media (max-width: 500px) {
        bottom: 30px;
        right: 0px;
    }
`

export const DeleteButton = ({ id } : { id: string }) => {
    const router = useRouter()
    
    const handleDelete = async () => {
        const { error, status } = await deletePost(id)

        if (error) {
            return console.log({ error, status })
        }

        router.push('/blog')
    }

   return(
    <div>
        <DeletePost onClick={handleDelete}>
            <Trash2 />
        </DeletePost>
    </div>
   )
}

export const EditButton = ({id} : {id: string}) => {
    const router = useRouter()


}