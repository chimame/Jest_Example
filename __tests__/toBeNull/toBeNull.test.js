describe('toBeNull example', () => {
  test('not equal null', () => {
    expect(false).not.toBeNull()
  })

  test('equal null', () => {
    expect(null).toBeNull()
  })
})
