# Koda Software Testing Library

A typescript testing library for Koa APIs or Cypress e2e testing. This library provides useful helper Typescript Jest configuration, functions and classes for mocking and generating values for your tests.

## Using this library

You can install this library using the following command

```bash
npm add -D @kodasoftware/testing jest jest-junit ts-jest ts-node
```

It is also recommended to install the following typing for your typescript project

```bash
npm add -D @types/jsonwebtoken @types/jest @types/koda @types/node
```

Once installed you can configure Jest by adding the following files to your project

`jest.config.ts`

```typescript
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import baseConfig from '@kodasoftware/testing/dist/jest.config';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  ...baseConfig,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [compilerOptions.baseUrl],
};

export default config;

```
