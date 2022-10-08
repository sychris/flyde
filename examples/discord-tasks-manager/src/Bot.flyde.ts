import { GroupedPart, NativePart, partInput, partOutput } from "@flyde/core";
import { Client } from "eris";
import { createTasksService } from "./tasks";

const servicePromise = createTasksService();

const part: NativePart = {
  id: "Discord Bot",
  inputs: {},
  outputs: {
    interaction: partOutput(),
    message: partOutput()
  },
  fn: (inputs, outputs, adv) => {
    console.log('BOB', 72);
    const bot: Client = adv?.context.bot;

    bot.on("error", async (e) => {
      adv?.onError(e);
    });
  
    bot.on("messageCreate", async (msg) => {
      outputs.message.next(msg);
    });
  
    bot.on("interactionCreate", async (interaction) => {
      console.log({interaction});
      
      outputs.interaction.next(interaction);
    });
  },
};

export = part;
