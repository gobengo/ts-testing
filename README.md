# ts-testing

Easy testing in TypeScript

## Requirements

## `npm test`

It works. All this does is `ts-node src/test`. `src/test/index.ts` is the easy-to-follow entrypoint.

By default, ./src/test/cli will run with glob `./src/**/*.test.ts`. So your test files should end with `.test.ts`.

## Tap F5 in VS Code to debug any test file

It's set up in [./.vscode/](./.vscode/).

Every test file should add

```typescript
import { cli } from '../test/cli'
if (require.main === module) {
  ;(async () => { await cli(__filename) })()
}
```

