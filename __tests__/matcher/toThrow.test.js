const sample = (throwError) => {
  if (throwError) {
    throw new Error("throw sample")
  }
}

describe('toThrow example', () => {
  test('throw error', () => {
    expect(() => {sample(true)}).toThrow()
  })
})
