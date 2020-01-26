export namespace Errors {
  export class NaNParameter extends Error {
    constructor(functionName: string, parameterName: string) {
      super(`ERROR in #${functionName}: NaN not allowed for param '${parameterName}'`);
    }
  }
}
