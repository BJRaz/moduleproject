// this typedefinition file, declares types for 'somemodule' while 'somemodule' does not provide types by itself

declare module "stringmodule" {
    export function returnString(): string ;
    export function reverseString(str: string) : string;
}
