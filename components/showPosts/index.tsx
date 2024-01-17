import { Post } from "@/lib/type-collections";
import * as Styles from '@/components/showPosts/Styles.showPosts'
import Link from "next/link";

const ShowPosts = ({ post }: {post: Post}) => {

    return (
        <Link href={'/' + post.id}>
        <Styles.PostsContainer>
            <Styles.Title>{post.title}</Styles.Title>
            <Styles.CreatedAt>{post.created_at}</Styles.CreatedAt>
        </Styles.PostsContainer>
        </Link>
    )
} 

export default ShowPosts