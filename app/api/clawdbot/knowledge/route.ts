import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const memoryDir = '/root/clawd/memory';
    const knowledgeFiles = [];

    // 读取memory目录下的所有.md文件
    if (fs.existsSync(memoryDir)) {
      const files = fs.readdirSync(memoryDir);
      for (const file of files) {
        if (file.endsWith('.md') && file !== 'TODO.md') {
          const filePath = path.join(memoryDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const date = file.replace('.md', '');
          
          knowledgeFiles.push({
            date,
            content,
            preview: content.substring(0, 200)
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      count: knowledgeFiles.length,
      data: knowledgeFiles
    });
  } catch (error) {
    console.error('Knowledge sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync knowledge' },
      { status: 500 }
    );
  }
}
