import supabase from "@/lib/supabase-client";
import type { Post } from "@/lib/type-collections";

export const getAllPosts = async () => {
    const { data } =  await supabase
      .from('posts')
      .select()
      .order('created_at', { ascending: false });
  
    //if (error) {
    //  throw new Error('Error fetching posts');
    //}
  
    return data;
  };



  export const createPost = async ({title, body} : {title:string, body:string}) => {
    const newPost = ({title, body})

    const {data} = await supabase
        .from('posts')
        .insert(newPost)

       return data
  }

  export const editPost = async ({title, body, id} : {title:string, body:string, id:string}) => {
    const { data } = await supabase
    .from('posts')
    .update({title, body})
    .eq('id', id)
    .single()

    return data
  }

  export const getPost = async (id : string) => {
    const { data } = await supabase
        .from('posts')
        .select()
        .eq('id', id)
        .single()

    return data
}

export const deletePost = async (id: string) => {
    const {data, error, status} = await supabase
    .from('posts')
    .delete()
    .eq('id', id)

    return {data, error, status}
}