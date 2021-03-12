import { ArrayStack } from '../src/arrayStack'

describe('Array Stack', () => {
  it('get all', () => {
    const a = new ArrayStack(3)
    expect(a.values[0]).toBe(undefined)
  })
  it('push', () => {
    const a = new ArrayStack(3)
    a.push(2)
    expect(a.values[0]).toBe(2)
    a.push(3)
    expect(a.values[1]).toBe(3)
    a.push(4)
    expect(a.values[2]).toBe(4)
    a.push(5)
    expect(a.values[2]).toBe(4)
    expect(a.values.length).toBe(3)
  })
  it('pop', () => {
    const a = new ArrayStack(3)
    a.push(2)
    a.push(3)
    a.push(4)
    expect(a.pop).toBe(4)
    expect(a.pop).toBe(3)
    expect(a.pop).toBe(2)
    expect(a.pop).toBe(undefined)
  })
})