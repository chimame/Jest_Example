import Counter from '../../sample/syntax/Counter.js'

describe('Counter', () => {
  let counter
  beforeAll(() => {
    console.log('beforeAll')
    counter = new Counter(0)
  })
  beforeEach(() => {
    console.log('beforeEach')
    counter.count = 1
  })
  afterAll(() => {
    console.log('afterAll')
  })
  afterEach(() => {
    console.log('afterEach')
  })
  describe('increment', () => {
    it('1が足されること', () => {
      counter.increment()
      expect(counter.count).toBe(2)
    })
  })
  describe('decrement', () => {
    it('1が引かれること', () => {
      counter.decrement()
      expect(counter.count).toBe(0)
    })
  })
})
