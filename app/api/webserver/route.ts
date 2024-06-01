import { NextRequest, NextResponse } from "next/server";

let url = "https://homie-server.onrender.com/switch/state";

let ans = "true";
let ans2 = "false";
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log("reqBody:", reqBody);
    let body;
    if (reqBody.state === "true") {
      body = JSON.stringify({ state: ans });
    } else {
      body = JSON.stringify({ state: ans2 });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function GET() {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
