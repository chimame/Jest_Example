describe('toBeNull example', () => {
  test('equal null', () => {
    expect(false).not.toBeNull()
  })

  test('equal null', () => {
    expect(null).toBeNull()
  })
})
