import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: "sk-proj-Ir5GxDqNuFGs3QhzCpaiT3BlbkFJ7pqD4yH5ZyQKIOgtL5VO", // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
