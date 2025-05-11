import supabase from "./supabase";

export async function getUrls(urlIds) {
    const { data: session, error } = await supabase
        .from("clicks")
        .select("*")
        .eq("url_id",urlIds);
    if (error) {
        console.log(error.message)
        throw new Error("Unable to load clicks")
    }
    return data;
}