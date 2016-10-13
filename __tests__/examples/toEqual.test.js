describe('toEqual example', () => {
  const test1 = {a: 1, b:"aaa"}
  const test2 = {a: 1, b:"aaa"}
  test('equal', () => {
    expect(test1).toEqual(test2)
  })

  test('not equal Object', () => {
    expect(test1).not.toBe(test2)
    expect(test1 === test2).toBeFalsy()
  })
})
