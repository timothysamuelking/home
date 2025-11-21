import { GoogleGenAI, Type } from "@google/genai";
import { BrandScript } from "../types";

const apiKey = process.env.API_KEY;

// Initialize Gemini client
// Note: In a real production app, you might proxy this through a backend to hide the key, 
// but for this demo we use the provided env variable directly as per instructions.
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateBrandScript = async (
  companyName: string,
  product: string,
  audience: string
): Promise<BrandScript> => {
  
  const prompt = `
    Act as a StoryBrand marketing expert. Create a 7-Part BrandScript for the following business:
    
    Company Name: ${companyName}
    Product/Service: ${product}
    Target Audience: ${audience}

    The BrandScript consists of:
    1. A Character (The customer and what they want)
    2. A Problem (External, Internal, and Philosophical problems they face)
    3. A Guide (The company, demonstrating Empathy and Authority)
    4. A Plan (3 simple steps to do business)
    5. A Call to Action (Direct and Transitional)
    6. Failure (What tragic thing happens if they don't buy)
    7. Success (The happy ending after they buy)

    Keep the tone professional, concise, and punchy. Focus on clarity.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            character: { type: Type.STRING, description: "What the customer wants" },
            problem: { type: Type.STRING, description: "The villain and the internal/external/philosophical conflict" },
            guide: { type: Type.STRING, description: "How the brand expresses empathy and authority" },
            plan: { type: Type.STRING, description: "A 3-step process plan" },
            callToAction: { type: Type.STRING, description: "Direct call to action" },
            failure: { type: Type.STRING, description: "The negative stakes" },
            success: { type: Type.STRING, description: "The successful resolution" },
          },
          required: ["character", "problem", "guide", "plan", "callToAction", "failure", "success"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as BrandScript;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Error generating BrandScript:", error);
    throw error;
  }
};
