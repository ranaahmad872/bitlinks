import clientPromise from "@/lib/mongodb"
import { redirect, notFound } from "next/navigation"

export default async function Page({ params }) {
    // 1. Params ko await karein (Next.js 15+ requirement)
    const { shorturl } = await params 

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("urls")

    // 2. Query exact lowercase 'shorturl' se karein
    const doc = await collection.findOne({ shorturl: shorturl })

    console.log("Found doc in DB:", doc) // Debugging: Terminal mein check karein null toh nahi?

    if (doc) {
        // 3. Logic: Agar "http" nahi laga, toh laga dein (External Redirect ke liye)
        let destination = doc.url.startsWith("http") ? doc.url : `https://${doc.url}`
        
        // 4. Return redirect directly (Try-catch ke andar mat daalna)
        return redirect(destination)
    }

    // Agar database mein nahi mila
    return notFound()
}