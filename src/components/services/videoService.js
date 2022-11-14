import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://guroxesxctmenafhhudh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cm94ZXN4Y3RtZW5hZmhodWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTM2NjgsImV4cCI6MTk4Mzk2OTY2OH0.SjPLtP75hOeRnZtXCeaZ9MJrMQX-QowuGMAvu003nWs'
const supabase = createClient(supabaseUrl, supabaseKey)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}