import { getPost } from "@/api-routes/posts";
import { Post } from "@/lib/type-collections";
import { DeleteButton } from "./buttons";

const ShowSinglePost = async ({ params } : { params: { id: string } } ) => {
    
    const { id } = params

    let post: Post | null = null

    post = await getPost(id)

    if (!post) return <div>No post found</div>

    return(
        <div>
            {post?.title}
            {post?.body}
            {post?.created_at}
            <DeleteButton id={id}/>
        </div>
    )
}

export default ShowSinglePost