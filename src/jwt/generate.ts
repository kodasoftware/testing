import { createPublicKey, generateKeyPairSync } from 'crypto';
import jwt from 'jsonwebtoken';

const DEFAULT_JWT_EXPIRY = 60;
export const DEFAULT_JWKS_ENDPOINT = 'http://localhost/.well-known/jwks.json';

export function generateToken(
  opts: {
    payload: string | object | Buffer;
    privateKey: string;
  } & jwt.SignOptions
): string {
  const {
    payload,
    privateKey,
    expiresIn = DEFAULT_JWT_EXPIRY,
    ...options
  } = opts;
  return jwt.sign(payload, privateKey, { expiresIn, ...options });
}

export class MockJwks {
  private readonly uri: URL;

  constructor(config: { uri?: string | URL }) {
    if (config.uri) {
      this.uri =
        typeof config.uri === 'string' ? new URL(config.uri) : config.uri;
    } else this.uri = new URL(DEFAULT_JWKS_ENDPOINT);
  }

  public generateKeys() {
    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
    });
    const jwks = createPublicKey(publicKey).export({ format: 'jwk' });

    return { publicKey, privateKey, jwks };
  }

  get endpoint() {
    return typeof this.uri;
  }
}
