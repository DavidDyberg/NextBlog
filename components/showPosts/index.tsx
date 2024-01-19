import { Post } from "@/lib/type-collections";
import * as Styles from '@/components/showPosts/Styles.showPosts'

const ShowPosts = ({ post }: {post: Post}) => {

    return (
        <Styles.PostLink href={'/' + post.id}>
            <Styles.PostsContainer>
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.CreatedAt>{post.created_at}</Styles.CreatedAt>
            </Styles.PostsContainer>
        </Styles.PostLink>
    )
} 

export default ShowPosts