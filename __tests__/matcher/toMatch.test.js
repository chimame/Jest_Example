describe('toMatch example', () => {
  test('match', () => {
    expect("aabcdeb").toMatch(/(abc|def)/)
  })

  test('not match', () => {
    expect("aabcdeb").not.toMatch(/(def)/)
  })
})
