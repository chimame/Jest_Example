describe('toBeCloseTo example', () => {
  test('equal', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.35, 0)
    expect(0.1 + 0.2).toBeCloseTo(0.35, 1)
  })

  test('not equal', () => {
    expect(0.1 + 0.2).not.toBeCloseTo(0.35, 2)
    expect(0.1 + 0.2).not.toBe(0.3)
  })
})
