import { Post } from "@/lib/type-collections";

const Test = ({ post }: {post: Post}) => {
    return (
        <div>
            {post.title}
            {post.created_at}
        </div>
    )
    
} 

export default Test