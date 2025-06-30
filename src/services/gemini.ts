import { GoogleGenerativeAI } from "@google/generative-ai";

export const callGemini = async (prompt: string) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        return response.text();
    } catch (error) {
        console.error('Gemini API error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        throw new Error(`Failed to generate content: ${errorMessage}`);
    }
}