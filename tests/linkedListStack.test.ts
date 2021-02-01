import { Cell, iterate } from '../src/linkedListStack'

describe('LinkedList Stack', () => {
  it('iterate should return empty array if onlye setinel', () => {
    const sentinel = new Cell()
    expect(iterate(sentinel)).toEqual([])
  })
  it('iterate should return number array ', () => {
    const sentinel = new Cell()
    sentinel.push(31)
    sentinel.push(72)
    sentinel.push(47)

    expect(iterate(sentinel)).toEqual([47, 72, 31])
  })

  it('pop', () => {
    const sentinel = new Cell()
    sentinel.push(31)
    sentinel.push(72)
    sentinel.push(47)
    sentinel.pop()

    expect(iterate(sentinel)).toEqual([72, 31])
  })

  it('pop', () => {
    const sentinel = new Cell()
    sentinel.push(31)
    sentinel.push(72)
    sentinel.push(47)
    const pop1 = sentinel.pop()
    const pop2 = sentinel.pop()

    expect(pop1?.value).toBe(47)
    expect(pop2?.value).toBe(72)
    expect(iterate(sentinel)).toEqual([31])
  })

  it('pop', () => {
    const sentinel = new Cell()
    sentinel.push(31)
    sentinel.push(72)
    sentinel.push(47)
    sentinel.pop()
    sentinel.pop()
    sentinel.pop()

    expect(iterate(sentinel)).toEqual([])
  })

  it('pop', () => {
    const sentinel = new Cell()
    sentinel.pop()

    expect(iterate(sentinel)).toEqual([])
  })
})