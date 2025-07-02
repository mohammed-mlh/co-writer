import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured', hasKey: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Gemini API key is configured',
      hasKey: true,
      keyLength: apiKey.length
    });

  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json(
      { error: 'Test failed' },
      { status: 500 }
    );
  }
} 