import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log("Supabase client initialized successfully")

export async function uploadImage(file: File) {
  const fileExt = file.name.split(".").pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `properties/${fileName}`

  const { data, error } = await supabase.storage.from("property-images").upload(filePath, file)

  if (error) {
    throw error
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("property-images").getPublicUrl(filePath)

  return publicUrl
}

