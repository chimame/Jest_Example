describe('toBeNaN example', () => {
  test('not equal Nan', () => {
    expect(false).not.toBeNaN()
  })

  test('equal Nan', () => {
    expect(NaN).toBeNaN()
  })
})
