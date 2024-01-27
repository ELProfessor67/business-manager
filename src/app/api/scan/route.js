import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import fs from 'fs';

export async function POST(req) {
  const { url,categories,device } = await req.json();

  try {
    const filename = new Date(Date.now()).getTime();
    const command = `npx lighthouse ${url} --output=json --only-categories=${categories.join(',')} --chrome-flags="--headless --no-sandbox" --chrome-path="${process.env.CHROMIUM_PATH}"  --emulated-form-factor=${device}  --output-path=./${filename}.json`;
    let result = execSync(command, { encoding: 'utf-8' });
    

    const file = fs.readFileSync(`./${filename}.json`);
    fs.unlinkSync(`./${filename}.json`);
    result = JSON.parse(file);
    return NextResponse.json(result,{status: 200})
  } catch (error) {
    console.error('Error scanning website:', error);
    return NextResponse.json(error,{status: 501})
  }
}
