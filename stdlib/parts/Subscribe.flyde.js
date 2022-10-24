const PubSub = require("pubsub-js");

module.exports = {
  id: "Subscribe",
  inputs: { key: { mode: "required", type: "any" } },
  outputs: { val: { type: "any" } },
  completionOutputs: ["never"],
  fn: function (inputs, outputs, adv) {
    // magic here
    const token = PubSub.subscribe(inputs.key, (_, data) => {
      outputs.val.next(data);
    });

    adv.onCleanup(() => {
      PubSub.unsubscribe(token);
    });
  },
};
