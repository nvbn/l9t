import { readJsonSync } from "https://deno.land/std/fs/mod.ts";

type ApiTypeDefinition = {
  description?: string;
  required?: string[];
  properties?: {
    [key: string]: ApiTypeDefinitionProperty;
  };
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

const getApi = (name: string): string =>
  name.replace(/\.[^.]+$/, "").replace("io.k8s.api.core.", "");

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

const getKind = (name: string): string => name.split(".").pop()!!;

const _toTypes = function* (name: string) {
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
    if (propDefinition.description) {
      yield `  /** ${escapeComment(propDefinition.description)} */`;
    }

    const propType = prop === "kind"
      ? `"${getKind(name)}"`
      : getPropType(propDefinition);

    if (required.has(prop)) {
      yield `  readonly "${prop}": ${propType};`;
    } else {
      yield `  readonly "${prop}"?: ${propType};`;
    }
  }
  yield `};`;
};

const toTypes = (name: string) => Array.from(_toTypes(name)).join("\n");

const _makeKubernetesConfig = function* (names: string[]) {
  yield "export type KubernetesConfig =";
  for (const typeName of names) {
    if (typeName && typeName.startsWith("io.k8s")) {
      yield `  | ${getFQDN(typeName)}`;
    }
  }
};

const makeKubernetesConfig = (names: string[]) =>
  Array.from(_makeKubernetesConfig(names)).join("\n");

for (const typeName of Object.keys(spec.definitions)) {
  if (typeName && typeName.startsWith("io.k8s")) {
    console.log(toTypes(typeName));
    console.log("");
  }
}

console.log(makeKubernetesConfig(Object.keys(spec.definitions)));
