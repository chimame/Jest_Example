describe('toBeGreaterThan example', () => {
  test('more than 10', () => {
    expect(11).toBeGreaterThan(10)
  })

  test('not more than 10', () => {
    expect(10).not.toBeGreaterThan(10)
  })
})
