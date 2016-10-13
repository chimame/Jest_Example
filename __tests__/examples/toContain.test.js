describe('toContain example', () => {
  test('include 1', () => {
    expect([1,"2",3]).toContain(1)
  })

  test('not include 2', () => {
    expect([1,"2",3]).not.toContain(2)
  })
})
