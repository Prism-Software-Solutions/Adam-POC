// api > hello > route.ts
import {NextRequest, NextResponse} from "next/server";

// export async function GET (request: NextRequest){
//     const greeting = "Hello World!!"
//     const json = {
//         greeting
//     };
    
//     return NextResponse.json(json);
// }

export async function GET() {
    const res = await
    fetch("https://labs.bible.org/api/?passage=votd");
    const allPostsData = await res.json();
    return NextResponse.json(allPostsData);
}