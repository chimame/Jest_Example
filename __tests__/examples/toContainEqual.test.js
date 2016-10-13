describe('toContainEqual example', () => {
  const array = [{a: "1", b: 2}, {c: 3, d: "4"}]
  test('include {a: "1", b: 2}', () => {
    expect(array).toContainEqual({a: "1", b: 2})
  })

  test('not include {c: 3, d: 4}', () => {
    expect(array).not.toContainEqual({c: 3, d: 4})
  })
})
