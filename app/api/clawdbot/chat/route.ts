import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    // 调用Clawdbot Gateway API
    const response = await fetch('http://localhost:18789/agent/call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLAWDBOT_API_TOKEN}`
      },
      body: JSON.stringify({
        agent: 'main',
        message,
        context
      })
    });

    if (!response.ok) {
      throw new Error('Clawdbot API failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Clawdbot API error:', error);
    return NextResponse.json(
      { error: 'Failed to call Clawdbot' },
      { status: 500 }
    );
  }
}
