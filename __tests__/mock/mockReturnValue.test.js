describe('mockReturnValue example', () => {
  const mock = jest.fn()
  mock.mockReturnValue(1)
  test('return 1', () => {
    expect(mock()).toBe(1)
    expect(mock()).toBe(1)
    expect(mock()).toBe(1)
  })

  test('not equal 0', () => {
    expect(mock()).not.toBe(0)
  })
})
