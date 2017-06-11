// TODO change function name
const solution = require('../lib/index')

describe('TODO: kata name', () => {
  function createTest(orig, dest, { focus = false }) {
    const text = `${JSON.stringify(orig)} => ${JSON.stringify(dest)}`
    const fn = () => {
      // TODO replace "solution" with the actual function
      expect(solution(orig)).toEqual(dest)
    }
    focus ? it.only(text, fn) : it(text, fn)
  }

  // TODO replace arguments
  test('argument', 'expected')
})
