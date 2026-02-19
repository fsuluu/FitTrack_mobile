
import { GoogleGenAI } from "@google/genai";
import { UserStats } from "../types";

// Fix: Initialized GoogleGenAI strictly with process.env.API_KEY as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMotivationalTip = async (stats: UserStats): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User stats: ${stats.steps}/${stats.stepsGoal} steps, ${stats.hydration}/${stats.hydrationGoal}ml water, ${stats.activeMinutes}/${stats.activeMinutesGoal} active mins. 
      Generate a single sentence of highly motivating fitness advice in a friendly tone. Keep it under 15 words.`,
    });
    // Fix: Accessing .text property directly (not as a method)
    return response.text || "You're doing great! Keep pushing towards your goals today.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Every step counts. Your future self will thank you for today's effort!";
  }
};
