require("dotenv").config();

import path from 'path';

import { resolveFlow } from "@flyde/runtime";
import eris, {  } from "eris";
import { initCommands } from "./commands";
import { createTasksService } from "./tasks";

import { execute, ResolvedFlydeRuntimeFlow } from '@flyde/core';
import { createDebugger } from './debugger';

// Create a Client instance with our bot token.
if (!process.env.BOT_TOKEN) {
  console.error(
    `BOT_TOKEN env variable missing. Please add a ".env" file in the project's root containing "BOT_TOKEN=yourtokenhere")`
  );
  process.exit(1);
}

const bot = new eris.Client(process.env.BOT_TOKEN);
(async () => {
  const tasksService = await createTasksService();

  const flow = resolveFlow(path.join(__dirname, 'Main.flyde'), 'implementation') as ResolvedFlydeRuntimeFlow;
  const inputs = {};

  console.log('GOGO 1');
  
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

  console.log('GOGO 2');

  // inputs.__trigger.subject.next('bob');
  console.log('GOGO 3');
  

  bot.on("ready", async () => {
    console.log("Connected and ready.");
    await initCommands(bot);
  });

  bot.on("error", async (e) => {
    console.error("ERR", e);
  });

  bot.on("messageCreate", async () => {
    console.log("BOT2");
  });

  bot.on("messageCreate", async (msg) => {
    console.log("message created!");
  });

  bot.on("interactionCreate", async (interaction) => {
    // if (interaction instanceof eris.CommandInteraction) {
    //   switch (interaction.data.name) {
    //     case "tasks": {
    //       const { options } = interaction.data;
    //       if (!options || !options.length) {
    //         console.error("corrupt tasks cmd");
    //         return;
    //       }

    //       const subCommand = options[0];
    //       switch (subCommand.name) {
    //         case "list": {
    //           const tasksList = await tasksService.getTasks();

    //           const flow = f.resolveFlow(path.join(__dirname, 'Test.flyde'), 'implementation') as ResolvedFlydeRuntimeFlow;

    //           const inputs = {name: dynamicPartInput(), assignee: dynamicPartInput()};
    //           const outputs = {task: dynamicOutput()};

    //           outputs.task.subscribe((task) => {
    //             interaction.createMessage(`Added task "${task.name}"`);
    //           });
    //           return interaction.createMessage(
    //             `There are ${tasksList.length} tasks logged. They are: ${tasksList
    //               .map((t) => t.name)
    //               .join(", ")}`
    //           );
    //         }
    //         case "add": {
    //           if (subCommand.type !== 1 || !subCommand.options) {
    //             console.error("corrupt sub cmd");
    //             return;
    //           }
    //           const nameOpt = subCommand.options.find(
    //             (opt) => opt.name === "name"
    //           ) as InteractionDataOptionsString;
    //           const assigneeOpt = subCommand.options.find(
    //             (opt) => opt.name === "assignee"
    //           ) as InteractionDataOptionsUser;
    //           const task = { name: nameOpt.value, assigneeId: assigneeOpt?.value };

    //           const flow = f.resolveFlow(path.join(__dirname, 'Test.flyde'), 'implementation') as ResolvedFlydeRuntimeFlow;

    //           const inputs = {name: dynamicPartInput(), assignee: dynamicPartInput()};
    //           const outputs = {task: dynamicOutput()};

    //           outputs.task.subscribe((task) => {
    //             interaction.createMessage(`Added task "${task.name}"`);
    //           });

    //           const cancelFn = execute({part: flow.main, partsRepo: flow.dependencies, inputs, outputs, _debugger: await createDebugger()})
    //           inputs.name.subject.next(task.name);
    //           inputs.assignee.subject.next(task.assigneeId || 'n/a');
    //         }
    //       }
    //     }
      //   default: {
      //     console.warn(`Unknown command`, interaction);
      //   }
      // }
    // }
  });

  bot.on("error", (err) => {
    console.warn(err);
  });

  bot.connect();
})();


