class Counter {
  public value = 0
  increment() {return this.value += 1}
}
const Controller = new Counter()

// console.log("Counter Created> ", Controller)

export default Controller
