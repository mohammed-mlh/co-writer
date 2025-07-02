import { NextRequest, NextResponse } from 'next/server';
import { callGemini } from '@/services/gemini';
import { createArticle } from '@/server/articles';
import { consumeCreditsForUser, getUserById } from '@/server/users';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      topic,
      audience,
      tone,
      length,
      keywords,
      contentType,
      additionalRequirements,
      userId,
      title: reqTitle
    } = body;

    // Validate required fields
    if (!topic || !audience || !userId) {
      return NextResponse.json(
        { error: 'Topic, audience, and userId are required' },
        { status: 400 }
      );
    }

    // Check user credits
    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    if (user.credits < 1) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 402 });
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

    // Use provided title or fallback to topic
    const title = reqTitle || topic;

    // Save article to DB
    const article = await createArticle({
      userId,
      title,
      topic,
      targetAudience: audience,
      tone: tone || 'Professional',
      wordCount,
      keywords: keywords || '',
      contentType: contentType || 'article',
      additionalRequirements: additionalRequirements || '',
      content: generatedContent,
    });

    // Consume 1 credit
    await consumeCreditsForUser(userId, 1);

    return NextResponse.json({
      article,
      message: 'Article generated and saved successfully',
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