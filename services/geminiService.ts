
import { GoogleGenAI } from "@google/genai";
import { UserStats } from "../types";

/**
 * AI Recommendation Service
 * Generates personalized hydration, workout, and wellness advice.
 * Fallback to static content if API fails or is missing.
 */
export const getAIRecommendation = async (userData: UserStats): Promise<string> => {
  const fallbackMessage = "Keep going! Small daily progress leads to big results. Focus on staying consistent with your water intake and movement today.";

  // Safe check for API Key availability
  if (!process.env.API_KEY) {
    console.warn("AI Recommendation: API Key missing. Using fallback content.");
    return fallbackMessage;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      As a fitness coach, provide a single, short recommendation (max 20 words) based on these stats:
      - Steps: ${userData.steps}/${userData.stepsGoal}
      - Hydration: ${userData.hydration}/${userData.hydrationGoal}ml
      - Active Minutes: ${userData.activeMinutes}/${userData.activeMinutesGoal}
      
      The advice should cover either hydration, workout motivation, or wellness suggestions.
      Tone: Motivational, clean, professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    const result = response.text;
    
    if (!result || result.trim() === "") {
      return fallbackMessage;
    }

    return result.trim();
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return fallbackMessage;
  }
};
