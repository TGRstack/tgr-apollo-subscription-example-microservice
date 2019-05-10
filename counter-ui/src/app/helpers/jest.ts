import { mount, shallow } from 'enzyme'

type IContext = () => {
  childContextTypes: {
    [key: string]: any // tslint:disable-line no-any
  };
  context: {
    [key: string]: any // tslint:disable-line no-any
  }
}

export function mountWrap(node: JSX.Element, createContext: IContext
) {
  return mount(node, createContext())
}
export function shallowWrap(node: JSX.Element, createContext: IContext) {
  return shallow(node, createContext())
}
