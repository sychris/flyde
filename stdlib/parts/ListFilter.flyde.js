module.exports = {"id":"ListFilter","inputs":{"list":{"mode":"required","type":"any"},"fn":{"mode":"required","type":"part({\"item\": \"any\", \"idx?\": \"any\"}|{\"allow\": \"any\", \"block\": \"any\"})"}},"outputs":{"r":{"type":"any"}},"completionOutputs":["r"],"fn":function (inputs, outputs, adv) { const o = outputs;
const {list, fn} = inputs;

const allowSet = new Set();
const blockSet = new Set();
const newList = [];

const uns = [];

const maybeSendNewList = () => {
  if (allowSet.size + blockSet.size === list.length) {
    o.r.next(newList.filter((item) => item !== undefined));
  }
};

list.forEach((item, idx) => {
  const itemInput = dynamicPartInput();
  const idxInput = dynamicPartInput();
  const outputs = Object.keys(fn.outputs).reduce(
    (p, k) => ({ ...p, [k]: dynamicOutput() }),
    {}
  );
  outputs.allow.subscribe(() => {
    newList.push(item);
    allowSet.add(idx);
    maybeSendNewList();
  });

  outputs.block.subscribe(() => {
    blockSet.add(idx);
    maybeSendNewList();
  });

  Object.keys(outputs)
    .filter((k) => k !== "allow" && k !== "block")
    .forEach((k) => {
      outputs[k].subscribe(() => {
        o.rs.next({ key: k, v: item, idx });
      });
    });
  const clean = adv.execute(
    fn,
    { item: itemInput, idx: idxInput },
    outputs,
    `${adv.insId}-fn`
  );

  idxInput.subject.next(idx);
  itemInput.subject.next(item);
  uns.push(clean);
});

adv.onCleanup(() => {
  uns.forEach((fn) => fn());
});
 }}