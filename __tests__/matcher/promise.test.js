describe('Promise example', () => {
  const rejectPromise = new Promise(() => {
    throw new Error("throw sample")
  })

  test('resolves to 1', () => {
    return expect(Promise.resolve('1')).resolves.toBe('1')
  })

  test('resolves', () => {
    return expect(rejectPromise).rejects.toEqual(new Error('throw sample'))
  })
})

describe('Promise example', () => {
  const rejectPromise = new Promise(() => {
    throw new Error("throw sample")
  })

  test('resolves to 1', async () => {
    await expect(Promise.resolve('1')).resolves.toBe('1')
  })

  test('resolves', async () => {
    await expect(rejectPromise).rejects.toEqual(new Error('throw sample'))
  })
})
