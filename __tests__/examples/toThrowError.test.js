const sample = () => {
  throw new Error("throw sample")
}

describe('toThrowError example', () => {
  test('throw error', () => {
    expect(sample).toThrowError(Error)
    expect(sample).toThrowError('throw sample')
    expect(sample).toThrowError(/sample/)
  })
})
