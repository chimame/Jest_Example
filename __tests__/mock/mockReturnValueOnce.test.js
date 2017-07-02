describe('mockImplementationOnce example', () => {
  const mock = jest.fn(() => 1)
  mock.mockImplementationOnce(() => "aa")
  mock.mockImplementationOnce(() => 4)

  test('changing return val', () => {
    expect(mock()).toBe("aa")
    expect(mock()).toBe(4)
    expect(mock()).toBe(1)
  })
})
