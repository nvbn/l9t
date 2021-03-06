import { readJsonSync } from "https://deno.land/std/fs/mod.ts";

const allowedNamespace = Deno.args[0];
const resourcesType = Deno.args[1];

type ApiTypeDefinition = {
  description?: string;
  required?: string[];
  properties?: {
    [key: string]: ApiTypeDefinitionProperty;
  };
  "x-kubernetes-group-version-kind"?:
    ApiTypeDefinitionXKubernetesGroupVersionKind[];
};

type ApiTypeDefinitionXKubernetesGroupVersionKind = {
  group: string;
  kind: string;
  version: string;
};

type ApiTypeDefinitionProperty =
  | ApiTypeDefinitionPropertyRefed
  | ApiTypeDefinitionPropertyTyped;

type ApiTypeDefinitionPropertyRefed = {
  description?: string;
  $ref: string;
};

const isRefPropType = (
  propDefinition: ApiTypeDefinitionProperty,
): propDefinition is ApiTypeDefinitionPropertyRefed =>
  Boolean((propDefinition as ApiTypeDefinitionPropertyRefed).$ref);

const getRefPropType = (
  propDefinition: ApiTypeDefinitionPropertyRefed,
): string => getFQDN(propDefinition.$ref.replace("#/definitions/", ""));

type ApiTypeDefinitionPropertyTyped = {
  description: string;
  type: string;
  items?: ApiTypeDefinitionProperty;
};

const isTypePropType = (
  propDefinition: ApiTypeDefinitionProperty,
): propDefinition is ApiTypeDefinitionPropertyTyped =>
  Boolean((propDefinition as ApiTypeDefinitionPropertyTyped).type);

type Spec = {
  definitions: {
    [path: string]: ApiTypeDefinition;
  };
};

const spec = readJsonSync("./spec.json") as Spec;

const getFQDN = (name: string): string =>
  name.replace(/\./g, "$").replace(/-/g, "_");

const getTypePropType = (
  propDefinition: ApiTypeDefinitionPropertyTyped,
): string => {
  if (propDefinition.type === "array") {
    if (propDefinition.items) {
      return `readonly ${getPropType(propDefinition.items)}[]`;
    } else {
      return "unknown[]";
    }
  } else if (propDefinition.type === "integer") {
    return "number";
  } else {
    return propDefinition.type;
  }
};

const getPropType = (propDefinition: ApiTypeDefinitionProperty): string => {
  if (isRefPropType(propDefinition)) {
    return getRefPropType(propDefinition);
  } else if (isTypePropType(propDefinition)) {
    return getTypePropType(propDefinition);
  } else {
    throw new Error("The definition is broken!");
  }
};

const escapeComment = (comment: string): string => {
  return comment.replace(/\/\*/g, "^*").replace(/\*\//g, "*^");
};

const toType = function* (name: string) {
  const definition = spec.definitions[name] as ApiTypeDefinition;

  const required = new Set<string>(definition.required || []);

  if (definition.description) {
    yield `/** ${escapeComment(definition.description)} */`;
  }
  yield `export type ${getFQDN(name)} = {`;
  for (
    const [prop, propDefinition] of Object.entries(
      definition.properties || {},
    )
  ) {
    if (prop == "apiVersion" || prop == "kind") {
      continue;
    }

    if (propDefinition.description) {
      yield `/** ${escapeComment(propDefinition.description)} */`;
    }

    const propType = getPropType(propDefinition);

    if (required.has(prop)) {
      yield `readonly "${prop}": ${propType};`;
    } else {
      yield `readonly "${prop}"?: ${propType};`;
    }
  }
  if (definition["x-kubernetes-group-version-kind"]) {
    yield "} & ({";
    for (
      const [{ group, kind, version }, i]
        of definition["x-kubernetes-group-version-kind"].map((
          v,
          i,
        ): [ApiTypeDefinitionXKubernetesGroupVersionKind, number] => [v, i])
    ) {
      const apiVersion = group ? `${group}/${version}` : version;
      yield `readonly apiVersion: "${apiVersion}";`;
      yield `readonly kind: "${kind}";`;

      if (i !== definition["x-kubernetes-group-version-kind"].length - 1) {
        yield "} | {";
      }
    }
    yield "});";
  } else {
    yield `};`;
  }
};

const makeTypes = function* () {
  for (const name of Object.keys(spec.definitions)) {
    if (!name.startsWith(allowedNamespace)) {
      continue;
    }

    yield* toType(name);
  }
};

const makeResources = function* () {
  let kindToTypes: { [k: string]: Set<string> } = {};
  for (const [name, definition] of Object.entries(spec.definitions)) {
    if (
      !name.startsWith(allowedNamespace) ||
      !definition["x-kubernetes-group-version-kind"]
    ) {
      continue;
    }

    const fqdn = getFQDN(name);
    for (const { kind } of definition["x-kubernetes-group-version-kind"]) {
      if (!kindToTypes[kind]) {
        kindToTypes[kind] = new Set();
      }

      kindToTypes[kind].add(fqdn);
    }
  }

  for (const [kind, [...types]] of Object.entries(kindToTypes)) {
    yield `export type ${kind} = ${types.join(" | ")};`;
  }

  yield `export type ${resourcesType} =`;
  for (const kind of Object.keys(kindToTypes)) {
    yield `| ${kind}`;
  }
  yield ";";
};

const code = [
  ...makeTypes(),
  ...makeResources(),
].join("\n");

console.log(code);
