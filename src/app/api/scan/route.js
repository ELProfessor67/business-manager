import { NextResponse } from 'next/server';
import { execSync } from 'child_process';


export async function POST(req) {
  const { url } = await req.json();

  try {
    // const command = `npx lighthouse ${url} --output=json --only-categories=performance --chrome-flags="--headless"`;
    const command = `npx lighthouse ${url} --output=json --only-categories=performance --chrome-flags="--headless --no-sandbox" --chrome-path="${process.env.CHROMIUM_PATH}"`;
    let result = execSync(command, { encoding: 'utf-8' });
    result = JSON.parse(result);

    console.log(result)

    return NextResponse.json(result,{status: 200})
  } catch (error) {
    console.error('Error scanning website:', error);
    return NextResponse.json(error,{status: 501})
  }
}
// npx lighthouse ${url} --output=json --only-categories=performance --chrome-flags="--headless --no-sandbox" --chrome-path="/snap/bin/chromium" --output-path=report.json
// npx lighthouse https://www.geeksforgeeks.org/how-to-install-chrome-in-ubuntu/ --output=json --only-categories=performance --chrome-flags="--headless"