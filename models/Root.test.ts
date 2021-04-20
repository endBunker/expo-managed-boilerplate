import Root, { IRoot } from './Root'

describe('Root basic functionality', () => {
  it('create void instance', () => {
    const instance: IRoot = Root.create({ test: '' })
    expect(instance.test).toStrictEqual('')
  })
})
