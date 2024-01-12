import { Post } from "@/lib/type-collections";

const Test = ({ post }: {post: Post}) => {
    return (
        <div>
            {post.title}
        </div>
    )
    
} 

export default Test