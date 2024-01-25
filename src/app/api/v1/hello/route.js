import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(req) {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  return NextResponse.json({user: user.firstName},{status: 200});

}

// Client ID = aG54ME0xQ3JBZGMxRERtdHZKcHM6MTpjaQ
// Client Secret = w6TyYjgM6SNFzxB_abokpdA0v2B2tAwbJYPm_woXvDq7GQSGGi


// Bearer Token = AAAAAAAAAAAAAAAAAAAAAEDorgEAAAAAshPGukG2uxWySAj%2B5YNCSpzV6fo%3D8JbhCiM7kaQKiRmG6pqVeVOD0dhr1p3vXYnuYNUdOzzccoZXys


// B7NTZPSJ66P28DUCKBSWVHYC

