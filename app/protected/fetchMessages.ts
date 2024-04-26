import { createClient } from "@/utils/supabase/server";

export const fetchMessageForUser = async (user_id: string) => {
    const supabase = createClient();

    return await supabase.from("Messages").select("*").eq("user_id", user_id);
}