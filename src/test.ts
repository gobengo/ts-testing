import { TestSet, TestRunner } from "alsatian";
// import { config as dotenv } from 'dotenv';
import { join } from 'path'
import { TapBark } from "tap-bark";

const defaultGlob = join(__dirname, './**.test.ts')

export const cli = async (filename: string) => {
  if ( ! filename) throw new Error(`test file glob cannot be falsy: ${filename}`)
  // Load up any pseudo environment variables
  // dotenv({ path: __dirname + '/../.env' });

  // Setup the alsatian test runner
  let testRunner = new TestRunner();
  let tapStream = testRunner.outputStream;
  let testSet = TestSet.create();
  const files = filename;
  testSet.addTestsFromFiles(files)

  // This will output a human readable report to the console.
  tapStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);

  // Runs the tests
  await testRunner.run(testSet);
}

if (require.main === module) {
  (async () => { await cli(join(__dirname, '../**/*.test.ts')) })()
}
