module.exports = {"id":"SubStr","inputs":{"str":{"mode":"required","type":"any"},"from":{"mode":"required","type":"any"},"to":{"mode":"optional","type":"any"}},"outputs":{"r":{"type":"any"}},"completionOutputs":["r"],"fn":function (inputs, outputs, adv) { const { str, from, to } = inputs;
const { r } = outputs;
        
// magic here
r.next(str.substring(from, to));     }}