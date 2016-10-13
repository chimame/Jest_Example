const sample = (throwError) => {
  try {
    if (throwError) {
        throw new Error("throw sample")
    }
  }
  catch(e){
  }
}

describe('toThrow example', () => {
  test('throw error', () => {
    expect(sample(true)).toThrow()
  })
})
