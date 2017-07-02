describe('toHaveLength example', () => {
  test('equal 3', () => {
    expect([1, "2", 3]).toHaveLength(3)
  })

  test('equal 4', () => {
    expect('abcd').toHaveLength(4)
  })

  test('equal 0', () => {
    expect('').toHaveLength(0)
  })
})
