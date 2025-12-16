import { GoogleGenAI } from "@google/genai";
import { generateResumeContext } from '../data/content';

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[],
  contextData?: any
): Promise<string> => {
  if (!ai) {
    return "缺少 API 密钥。请配置环境变量。";
  }

  try {
    // Generate context string from current app state if provided
    let contextString = "";
    if (contextData) {
        contextString = generateResumeContext(
            contextData.personalInfo,
            contextData.skills,
            contextData.experiences,
            contextData.projects
        );
    } else {
        // Fallback to imported default context is handled inside component mostly, 
        // but here we just need a placeholder if null.
        // Actually, let's rely on the passed contextData.
        contextString = "Context not available."; 
    }

    const model = "gemini-2.5-flash";
    const systemInstruction = `
      你也是陈亚历（Alex Chen）个人作品集网站的 AI 助手。
      你的目标是根据提供的背景信息，回答有关 Alex 的专业经验、技能、项目和博客文章的问题。
      
      这是 Alex 的简历背景信息:
      ${contextString}
      
      准则:
      1. 保持专业、简洁和乐于助人。
      2. 如果用户问到 Alex 不具备的技能，请诚实地说简历中未列出。
      3. 使用适合热情的嵌入式工程师的语气。
      4. 除非被要求提供详细信息，否则保持回答相对简短（150 字以内）。
      5. 不要编造背景信息中未列出的经历。
      6. 请使用中文回答。
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "我无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，处理您的请求时遇到错误。";
  }
};