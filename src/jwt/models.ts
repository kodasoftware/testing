export enum JwtAlgorithms {
  HS512 = 'HS512',
  RS256 = 'RS256',
}

export type JwtAlgorithm = keyof typeof JwtAlgorithms;

export interface MockJwtOptions {
  privateKey: string;
  algorithm?: JwtAlgorithm;
  expiresIn?: string | number;
}
