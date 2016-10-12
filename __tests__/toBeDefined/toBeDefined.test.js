describe('toBeDefined example', () => {
  test('not equal defined', () => {
    expect(undefined).not.toBeDefined()
  })

  test('equal defined', () => {
    expect('aa').toBeDefined()
  })
})
