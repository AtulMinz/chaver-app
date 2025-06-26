import {GoogleGenAI} from "@google/genai";
import { env } from "hono/adapter";



const { GEMINI_API } = env<{ GEMINI_API: string }>

const ai = new GoogleGenAI({apiKey: })
