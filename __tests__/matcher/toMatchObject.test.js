describe('toMatchObject example', () => {
  const testHash = {a: 1, b:"aaa", c: {aa: 12, bb:"abab"}, d: false}
  test('equal', () => {
    expect(testHash).toMatchObject({a: 1, c: {aa: 12}})
  })
})
