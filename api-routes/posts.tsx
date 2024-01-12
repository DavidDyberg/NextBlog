import supabase from "@/lib/supabase-client";

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