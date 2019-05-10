export class Counter {
  public value = 0
  increment = () => this.value += 1
}
const Controller = new Counter()

// console.log({Controller})

export default Controller
