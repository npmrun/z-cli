import React from 'react';
import path from 'node:path'
import { fileURLToPath } from "node:url"
import { withFullScreen } from "fullscreen-ink";
import App from "./App"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ink = withFullScreen(<App/>, {
  exitOnCtrlC: false,
});
ink.start();
; (async () => {
  await ink.waitUntilExit();
})()
