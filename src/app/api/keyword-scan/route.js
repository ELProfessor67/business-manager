
import getKeywords from "@/utils/getKeywords";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const { url } = await req.json();
        const keywords = await getKeywords(url)
        return NextResponse.json({success: true,keywords},{status: 200})
   } catch (error) {
        console.error('Error scanning website:', error);
        return NextResponse.json(error,{status: 501})
   }
}
