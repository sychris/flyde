import { CodeNode } from "@flyde/core";

export * from "./GetAttribute/GetAttribute.flyde";

const namespace = "Objects";

/** @deprecated */
export const GetAttributeOld: CodeNode = {
  id: "Get Attribute",
  searchKeywords: ["pick", "dot"],
  namespace,
  defaultStyle: {
    icon: "fa-magnifying-glass",
  },
  description: "Gets an attribute from an object",
  inputs: {
    object: {
      description: "Object to get attribute from",
    },
    attribute: {
      description: "Attribute to get",
    },
  },
  outputs: {
    value: {
      description: "The value of the attribute",
    },
  },
  run: ({ object, attribute }, { value }) =>
    value.next(attribute.split(".").reduce((obj, i) => obj[i], object)),
};

export const JSONParse: CodeNode = {
  id: "JSON Parse",
  defaultStyle: {
    icon: "fa-glasses",
  },
  namespace,
  description: "Parses a JSON string into an object",
  inputs: { json: { description: "JSON string to parse" } },
  outputs: { object: { description: "The parsed object" } },
  run: ({ json }, { object }) => object.next(JSON.parse(json)),
};

export const JSONStringify: CodeNode = {
  id: "JSON Stringify",
  defaultStyle: {
    icon: "fa-pen-fancy",
  },
  namespace,
  description: "Stringifies an object into a JSON string",
  inputs: { object: { description: "Object to stringify" } },
  outputs: { json: { description: "The stringified JSON" } },
  run: ({ object }, { json }) => json.next(JSON.stringify(object)),
};

export const ObjectKeys: CodeNode = {
  id: "Keys",
  defaultStyle: {
    icon: "fa-key",
  },
  namespace,
  description: "Emits the keys of an object",
  inputs: { object: { description: "Object to get keys of" } },
  outputs: { keys: { description: "The keys of object" } },
  run: ({ object }, { keys }) => keys.next(Object.keys(object)),
};

export const ObjectHasOwnProperty: CodeNode = {
  id: "Has own property",
  defaultStyle: {
    icon: "fa-key",
  },
  namespace,
  description: "Checks if object has property",
  inputs: {
    object: { mode: "required", description: "Object to get keys of" },
    property: { mode: "required", description: "the property to search for" }

  },
  outputs: {
    true: { description: "The value is true" },
    false: { description: "The value is false" },
  },
  run: function (inputs, outputs) {
    const { true: trueOut, false: falseOut } = outputs;
    const { object, property } = inputs;
    if (object.hasOwnProperty(property)) {
      trueOut.next(true);
    } else {
      falseOut.next(false);
    }
  },
};

export const ObjectValues: CodeNode = {
  id: "Values",
  namespace,
  description: "Emits the values of an object",
  inputs: { object: { description: "Object to get values of" } },
  outputs: { values: { description: "The values of object" } },
  run: ({ object }, { values }) => values.next(Object.values(object)),
};

export const ObjectEntries: CodeNode = {
  id: "Entries",
  defaultStyle: {
    icon: "fa-box",
  },
  namespace,
  description: "Emits the entries of an object",
  inputs: { object: { description: "Object to get entries of" } },
  outputs: { entries: { description: "The entries of object" } },
  run: ({ object }, { entries }) => entries.next(Object.entries(object)),
};

export const SetAttribute: CodeNode = {
  id: "Set Attribute",
  searchKeywords: ["dot"],
  namespace,
  defaultStyle: {
    icon: "fa-box",
  },
  description: "Sets an attribute on an object",
  inputs: {
    object: {
      description: "Object to set attribute on",
    },
    attribute: {
      description: "Attribute to set",
    },
    value: {
      description: "Value to set attribute to",
    },
  },
  outputs: {
    object: {
      description: "The object with the attribute set",
    },
  },
  run: ({ object, attribute, value }, { object: outputObject }) => {
    const attributes = attribute.split(".");
    const last = attributes.pop();
    const target = attributes.reduce((obj, i) => obj[i], object);
    target[last] = value;
    return outputObject.next(object);
  },
};

export const DeleteAttribute: CodeNode = {
  id: "Delete Attribute",
  defaultStyle: {
    icon: "fa-box",
  },
  namespace,
  description: "Deletes an attribute from an object",
  inputs: {
    object: { description: "Object to delete attribute from" },
    attribute: { description: "Attribute to delete" },
  },
  outputs: {
    object: {
      description: "The object with the attribute deleted",
    },
  },
  run: ({ object, attribute }, { object: outputObject }) => {
    // delete attribute from object while supporting dot notation
    const attributes = attribute.value.split(".");
    const last = attributes.pop();
    const target = attributes.reduce((obj, i) => obj[i], object.value);
    delete target[last];
    outputObject.next(object.value);
  },
};
