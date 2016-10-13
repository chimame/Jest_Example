describe('toBeGreaterThanEqual example', () => {
  test('more than 10 or equal', () => {
    expect(11).toBeGreaterThanOrEqual(10)
  })

  test('more than 10 or equal', () => {
    expect(10).toBeGreaterThanOrEqual(10)
  })
})
