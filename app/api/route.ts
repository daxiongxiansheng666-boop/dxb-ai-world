import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: '大熊的AI世界 API',
    version: '1.0.0',
    endpoints: {
      posts: '/api/posts',
      projects: '/api/projects',
      tools: '/api/tools',
      knowledge: '/api/knowledge',
    }
  });
}
