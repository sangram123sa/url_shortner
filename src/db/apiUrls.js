import supabase from "./supabase";

export async function getUrls(user_id) {
    const { data: session, error } = await supabase
        .from("urls")
        .select("*")
        .eq("user_id",user_id);
    if (error) {
        console.log(error.message)
        throw new Error("Unable to load URLs")
    }
    return data;
}