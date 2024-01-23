'use client'
import { getPost } from "@/api-routes/posts";
import { Post } from "@/lib/type-collections";
import { DeleteButton } from "./buttons";
import * as Styles from '@/app/blog/[id]/Styles.ShowSinglePost'
import { format } from "date-fns";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const ShowSinglePost = ({ params } : { params: { id: string } } ) => {    
    const { id } = params

    const {data: post, isLoading, error} = useQuery({
        queryKey:['ShowSinglePost', parseInt(id!)],
        queryFn:() => getPost(id!),
    })

    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading post</div>;

    let currentDate: string | null = null;

    if (post?.created_at) {
      currentDate = format(new Date(post.created_at), 'MMMM do yyyy, h:mm:ss a');
    }

    return(
        <Styles.SinglePostContainer>
            <Styles.Title>
                {post?.title}
            </Styles.Title>

            <Styles.BodyText>
                {post?.body}
            </Styles.BodyText>
            <Styles.CreatedAtWrapper>
                <Styles.CreatedAt>Created at:</Styles.CreatedAt> 
                <Styles.Date>{currentDate}</Styles.Date>
            </Styles.CreatedAtWrapper>
            <Link href={'/blog/' + id + '/edit'}><Styles.EditIcon></Styles.EditIcon></Link>
            <DeleteButton id={id}/>
        </Styles.SinglePostContainer>
    )
}

export default ShowSinglePost