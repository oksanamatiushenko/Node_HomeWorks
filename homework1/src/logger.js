import fs from "fs/promises";

export async function logMessage(message) {
  try {
    await fs.appendFile("log.txt", message + " / ");
    console.log("Message written to log");
  } catch (err) {
    console.error("Error writing to log:", err);
  }
}

