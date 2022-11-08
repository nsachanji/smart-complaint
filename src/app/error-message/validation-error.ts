export interface ValidationError {
  [key: string]: string[];
}

export interface ContainsError {
  validationErrors: ValidationError;
}

export interface ContainsDynamicKeyErrors {
  validationErrors: {
    [key: string]: ValidationError;
  };
}
