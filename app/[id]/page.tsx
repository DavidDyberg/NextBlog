import { getPost } from "@/api-routes/posts";
import { Post } from "@/lib/type-collections";
import { DeleteButton } from "./buttons";
import * as Styles from '@/app/[id]/Styles.ShowSinglePost'

const ShowSinglePost = async ({ params } : { params: { id: string } } ) => {
    
    const { id } = params

    let post: Post | null = null

    post = await getPost(id)

    if (!post) return <div>No post found</div>

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
                <Styles.Date>{post?.created_at}</Styles.Date>
            </Styles.CreatedAtWrapper>
            
            <DeleteButton id={id}/>
        </Styles.SinglePostContainer>
    )
}

export default ShowSinglePost