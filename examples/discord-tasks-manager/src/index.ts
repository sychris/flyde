require("dotenv").config();

import path from 'path';

import { resolveFlow } from "@flyde/runtime";
import eris, {  } from "eris";
import { initCommands } from "./commands";

import { execute, ResolvedFlydeRuntimeFlow } from '@flyde/core';
import { createDebugger } from './debugger';

import assert from 'assert';

assert(process.env.BOT_TOKEN, `BOT_TOKEN env variable missing. Please add a ".env" file in the project's root containing "BOT_TOKEN=yourtokenhere")`);

// Create a Client instance with our bot token.
const bot = new eris.Client(process.env.BOT_TOKEN);
(async () => {
  const flow = resolveFlow(path.join(__dirname, 'Main.flyde'), 'implementation') as ResolvedFlydeRuntimeFlow;
  const inputs = {};
  
  execute({
    part: flow.main,
    partsRepo: flow.dependencies,
    _debugger: await createDebugger(),
    inputs,
    outputs: {},
    extraContext: {
      bot
    },
    onBubbleError: (err) => {throw err;}
  });
  
  bot.on("ready", async () => {
    await initCommands(bot);
  });

  bot.on("error", (err) => {
    console.warn(err);
  });

  bot.connect();
})();


