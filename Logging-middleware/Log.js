import axios from "axios";

export default async function Log(stack, level, pkg, message) {
  try {
    const payload = {
      stack,
      level,
      package: pkg,
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("Sending log:", payload); 

    
    await axios.post("http://20.244.56.14/evaluation-service/logs", payload);
  } catch (error) {
    console.error("Failed to send log:", error);
  }
}
