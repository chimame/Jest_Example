export default class Counter {
  constructor(count) {
    this.count = count
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}