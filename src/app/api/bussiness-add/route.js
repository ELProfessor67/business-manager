import connectDb from "@/lib/db/connectDB";
import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import userDetails from "@/lib/models/userDetails";

export async function POST(req) {
    try {
        await connectDb();
        const { userId } = getAuth(req);
        const {business_name,company_address,company_place_id,website} = await req.json();
        let isExist = await userDetails.findOne({user_id: userId});
        if(isExist){
            if(business_name) isExist.business_name = business_name;
            if(company_address) isExist.company_address = company_address;
            if(website) isExist.website = website;
            if(company_place_id) isExist.company_place_id = company_place_id;
            await isExist.save();
        }else{
            isExist = await userDetails.create({business_name,website,company_address,company_place_id,user_id:userId});
        }
        return NextResponse.json({success: true,details: isExist})
    } catch (error) {
        return NextResponse.json({success: false,message: error.message},{status: 501})
    }
}

export async function GET(req) {
    try {
        await connectDb();
        const { userId } = getAuth(req);
        let details = await userDetails.findOne({user_id: userId});
        if(!details) details = {};
        return NextResponse.json({success: true,details})
    } catch (error) {
        return NextResponse.json({success: false,message: error.message},{status: 501})
    }
}