import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function POST(req) {
  const { url } = await req.json();

  try {
    const command = `npx lighthouse ${url} --output=json --only-categories=performance --chrome-flags="--headless"`;
    let result = execSync(command, { encoding: 'utf-8' });
    result = JSON.parse(result);
    console.log(result)

    return NextResponse.json(result,{status: 200})
  } catch (error) {
    console.error('Error scanning website:', error);
    return NextResponse.json(error,{status: 501})
  }
}
