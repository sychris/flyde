module.exports = {"id":"FormatMessage","inputs":{"template":{"mode":"required","type":"any"},"var1":{"mode":"required","type":"any"},"var2":{"mode":"required-if-connected","type":"any"},"var3":{"mode":"required-if-connected","type":"any"}},"outputs":{"r":{"type":"any"}},"completionOutputs":["r"],"fn":function (inputs, outputs, adv) { const { template, var1, var2, var3 } = inputs;
const { r } = outputs;
        
// magic here
 const replaced = template
    .replace("$VAL3", var3)
    .replace("$VAL2", var2)
    .replace("$VAL", var1)
    .replace("$VAR3", var3)
    .replace("$VAR2", var2)
    .replace("$VAR", var1);
r.next(replaced); }}