import { Hono } from "hono";
import { GoogleGenAI } from "@google/genai";
import { env } from "hono/adapter";

type Bindings = {
  GEMINI_API: string;
};

const app = new Hono<{ Bindings: Bindings }>();

function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

  app.get("/api/health", async (c) => {
    return c.json({
      message: "Server up and running",
    });
  });

  app.post("/api/generate", async (c) => {
    const body = await c.req.json();

    const { message } = body;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message as string,
    });

    return c.json({ result: response.text });
  });
}

main();

export default app;
