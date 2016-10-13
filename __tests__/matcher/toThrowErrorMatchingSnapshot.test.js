const sample = () => {
  throw new Error("throw sample")
}

describe('toThrowErrorMatchingSnapshot example', () => {
  test('throw error', () => {
    expect(sample).toThrowErrorMatchingSnapshot()
  })
})
