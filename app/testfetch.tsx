import { Post, User } from "@/lib/type-collections";

const Test = ({ user }: {user: User}) => {
    return (
        <div>
            {user.username}
            {user.email}
            {user.created_at}
        </div>
    )
    
} 

export default Test