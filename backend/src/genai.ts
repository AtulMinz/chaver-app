import { GoogleGenAI } from "@google/genai";
import { PinataSDK } from "pinata";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
export const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL,
});
