import nock from 'nock';

import { JwtAlgorithms } from '../jwt/models';

export function mockJwksEndpoint(opts: {
  endpoint: URL;
  kid: string;
  jwks: JsonWebKey;
}) {
  nock(opts.endpoint.origin, { allowUnmocked: false })
    .get(opts.endpoint.pathname)
    .reply(200, {
      keys: [
        { use: 'sig', kid: opts.kid, alg: JwtAlgorithms.RS256, ...opts.jwks },
      ],
    });
}
