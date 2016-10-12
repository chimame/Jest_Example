describe('toBeUndefined example', () => {
  test('not equal undefined', () => {
    expect(false).not.toBeUndefined()
  })

  test('equal undefined', () => {
    expect(undefined).toBeUndefined()
  })
})
