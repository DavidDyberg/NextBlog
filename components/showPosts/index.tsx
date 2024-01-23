import { Post } from "@/lib/type-collections";
import * as Styles from '@/components/showPosts/Styles.showPosts'
import { format } from "date-fns";

const ShowPosts = ({ post }: {post: Post}) => {

    const currentDate = format(new Date(post.created_at), 'MMMM d, yyyy');

    return (
        <Styles.PostLink href={'/blog/' + post.id}>
            <Styles.PostsContainer>
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.CreatedAt>{currentDate}</Styles.CreatedAt>
            </Styles.PostsContainer>
        </Styles.PostLink>
    )
} 

export default ShowPosts