import supabase from "@/lib/supabase-client";
import type { Post } from "@/lib/type-collections";

export const getAllPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .order('created_at', { ascending: false });
  
    if (error) {
      throw new Error('Error fetching posts');
    }
  
    return data;
  };

  export const createPost = async ({title, body} : {title:string, body:string}) => {
    const newPost = ({title, body})

    const {data, error} = await supabase
        .from('posts')
        .insert(newPost)

        if (error) {
            throw new Error('Fill all the bla')
        }

       return data
  }