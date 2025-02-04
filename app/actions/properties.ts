import { supabase } from "@/lib/supabase"
import type { Property } from "@/types"

export async function fetchProperties(): Promise<Property[]> {
  try {
    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error fetching properties:", error)
    return []
  }
}


