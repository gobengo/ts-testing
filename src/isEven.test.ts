import { cli } from './test'
import { isEven } from './isEven'
import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";

const somethingToHappen = async () => undefined

@TestFixture("Testing the Test Framework")
export class SetOfTests {
    // pass arguments into your test functions to keep your test code from being repetative
    @TestCase(1, false)
    @TestCase(2, true)
    @TestCase(3, false)
    @TestCase(4, true)
    @AsyncTest("isEven")
    public async isEvenTest(n: number, expected: boolean) {
      return await Expect(isEven(n)).toBe(expected);
    }
}

if (require.main === module) {
  ;(async () => { await cli(__filename) })()
}
