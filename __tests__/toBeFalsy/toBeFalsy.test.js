describe('toBeFalsy example', () => {
  test('equal false', () => {
    expect(false).toBeFalsy()
  })

  test('equal false', () => {
    expect(undefined).toBeFalsy()
  })

  test('equal false', () => {
    expect(0).toBeFalsy()
  })

  test('equal false', () => {
    expect('').toBeFalsy()
  })

  test('equal false', () => {
    expect(null).toBeFalsy()
  })

  test('equal false', () => {
    expect(NaN).toBeFalsy()
  })
})
