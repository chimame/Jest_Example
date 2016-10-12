describe('toBeTruthy example', () => {
  test('equal true', () => {
    expect(true).toBeTruthy()
  })

  test('equal false', () => {
    expect(1).toBeTruthy()
  })

  test('equal false', () => {
    expect('aaa').toBeTruthy()
  })
})
