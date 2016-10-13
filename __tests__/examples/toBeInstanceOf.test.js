describe('toBeInstanceOf example', () => {
  class A {}

  test('instance of A', () => {
    expect(new A()).toBeInstanceOf(A)
  })

  test('instance of Function', () => {
    expect(() => {}).toBeInstanceOf(Function)
  })

  test('not instance of Function', () => {
    expect(new A()).not.toBeInstanceOf(Function)
  })
})
