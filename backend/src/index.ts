import { Hono } from "hono";
import { GoogleGenAI } from "@google/genai";
import { env } from "hono/adapter";
import { PinataSDK } from "pinata";

type Bindings = {
  GEMINI_API: string;
  PINATA_JWT_TOKEN: string;
  GATEWAY_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
  const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.GATEWAY_URL,
  });

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

    const url = await pinata.upload.public.createSignedURL({
      expires: 60,
    });

    return c.json({ result: response.text, url: url });
  });
}

main();

export default app;
