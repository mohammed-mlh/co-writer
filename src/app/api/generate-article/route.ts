import { NextRequest, NextResponse } from 'next/server';
import { callGemini } from '@/services/gemini';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, audience, tone, length, keywords, contentType, additionalRequirements } = body;

    // Validate required fields
    if (!topic || !audience) {
      return NextResponse.json(
        { error: 'Topic and audience are required' },
        { status: 400 }
      );
    }

    // Build the prompt for Gemini
    const prompt = `Write a ${contentType || 'article'} about "${topic}" targeting ${audience}.

Tone: ${tone || 'Professional'}
Length: ${length || 'Long (800-1200 words)'}
Keywords: ${keywords || 'N/A'}
Additional Requirements: ${additionalRequirements || 'None'}

Please write the content in MARKDOWN format (not HTML) with proper headings using # ## ###, paragraphs, and formatting. Make it engaging, informative, and well-structured. Do not use HTML tags, only markdown syntax.`;

    // Call Gemini API
    const generatedContent = await callGemini(prompt);

    // Calculate word count
    const wordCount = generatedContent.split(/\s+/).length;

    return NextResponse.json({
      content: generatedContent,
      wordCount,
      generatedAt: new Date().toISOString(),
      model: 'gemini-1.5-flash'
    });

  } catch (error) {
    console.error('Error generating article:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate article';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 