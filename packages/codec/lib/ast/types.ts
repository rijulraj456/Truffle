import type * as Common from "@truffle/codec/common";

export interface TypeDescriptions {
  typeIdentifier: string;
  typeString?: string;
}

export interface AstNode {
  constant?: boolean;
  mutability?: "mutable" | "immutable" | "constant"; //variable, not function, mutability!
  id: number;
  name: string;
  canonicalName?: string;
  linearizedBaseContracts?: number[];
  internalFunctionIDs?: {
    [nodeId: string]: number; //note the strings are numeric
  };
  members?: AstNode[];
  underlyingType?: AstNode;
  nodes?: AstNode[];
  nodeType: string;
  ast_type?: string; //HACK: Vyper equivalent of nodeType
  scope?: number;
  src: string;
  stateVariable?: boolean;
  storageLocation?: string;
  typeDescriptions: TypeDescriptions;
  typeName?: AstNode;
  expression?: {
    referencedDeclaration?: any;
  };
  value?: null | any;
  visibility?: string; //not using Visibility type above,
  //that's intended for functions but this could be other
  //things
  stateMutability?: Common.Mutability;
  kind?: string;
  hexValue?: string;
  referencedDeclaration?: any;
  parameters?: {
    parameters: AstNode[];
  };
  returnParameters?: {
    parameters: AstNode[];
  };
  parameterTypes?: {
    parameters: AstNode[];
  };
  returnParameterTypes?: {
    parameters: AstNode[];
  };
  baseType?: AstNode;
  keyType?: AstNode;
  valueType?: AstNode;
  payable?: boolean;
  indexed?: boolean;
  anonymous?: boolean;
  contractKind?: Common.ContractKind;
  isConstructor?: boolean;
  usedErrors?: number[];
  usedEvents?: number[];
  //Note: May need to add more in the future.
  //May also want to create a proper system of AstNode types
  //in the future, but sticking with this for now.
}

export interface AstNodes {
  [nodeId: number]: AstNode;
}

//the debugger uses this
export interface Scopes {
  [nodeId: string]: {
    id: number;
    sourceId: string;
    parentId: number | null;
    pointer: string;
    variables?: {
      name: string;
      id: number;
    }[];
    definition?: AstNode;
  };
}
