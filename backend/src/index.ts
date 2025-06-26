import { Hono } from "hono";
import { pinata, ai } from "./genai";

type Bindings = {
  GEMINI_API: string;
  PINATA_JWT_TOKEN: string;
  GATEWAY_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

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

export default app;
