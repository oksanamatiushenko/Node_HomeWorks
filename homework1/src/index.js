import { logMessage } from "./logger.js";

async function main() {
  await logMessage("This is first message");
  await logMessage("This is second message");
  await logMessage("This is third message");
}

main();
