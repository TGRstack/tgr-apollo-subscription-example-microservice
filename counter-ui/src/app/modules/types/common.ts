export type ReactChildrenArr = React.ReactChild[] | Element[]
export type ReactChildren = React.ReactChild |  Element | ReactChildrenArr

export interface IEvent {
  target: {value: string}
}
export interface IFluxAction {
  type: string,
  payload?: any, // tslint:disable-line no-any
  meta?: any,  // tslint:disable-line no-any
}

// helpers
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N

// common primitives
export type Ins = number | string
export interface Iobj {[key: string]: any} // tslint:disable-line no-any

export type Optional<T> = { [P in keyof T]? : T[P] }
// Optional declares a type of keyed type T where all keys are optional.
// https://gist.github.com/rsms/60e8304808a1b801e8234f3bef5fcb05
// EXAMPLES OF USAGE:
// interface Foo {
//   x: number
//   y: number
// }
// type OptionalFoo = Optional<Foo>
// // OptionalFoo == interface Foo {
// //   x? :number
// //   y? :number
// // }
// function fooify(extraFoo :OptionalFoo) :Foo {
//   const baseFoo :Foo = getBaseFoo()
//   return Object.assign({}, baseFoo, extraFoo)
// }
// fooify({x:3}) // returns a valid Foo
// fooify({z:4}) // error: no "z" property in OptionalFoo
// fooify({y:'5'}) // error: bad type "string" for property y; expected "number"
