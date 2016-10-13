describe('toBeLessThan example', () => {
  test('less than 10', () => {
    expect(9).toBeLessThan(10)
  })

  test('not less than 10', () => {
    expect(10).not.toBeLessThan(10)
  })
})
