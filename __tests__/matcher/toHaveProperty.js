describe('toHaveProperty example', () => {
  const testHash = {a: 1, b:"aaa", c: {aa: 12, bb:"abab"}, d: false}
  test('equal', () => {
    expect(testHash).toHaveProperty('d')
    expect(testHash).not.toHaveProperty('e')

    expect(testHash).toHaveProperty('c.bb', 'abab')
  })
})
