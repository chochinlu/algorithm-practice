import { Cell, LinkedList } from '../src/linkedList2'

describe('linked list 2', () => {
  it('add cell at beginning', () => {
    const list = new LinkedList()

    list.addAtBeginning(new Cell(2))
    expect(list.iterate().length).toBe(1)
    expect(list.iterate()[0]).toBe(2)

    list.addAtBeginning(new Cell(3))
    expect(list.iterate().length).toBe(2)
    expect(list.iterate()[0]).toBe(3)
    expect(list.iterate()[1]).toBe(2)
  })

  it('add cell at end', () => {
    const list = new LinkedList()
    list.addAtEnd(new Cell(2))
    expect(list.iterate().length).toBe(1)
    expect(list.iterate()[0]).toBe(2)

    list.addAtEnd(new Cell(3))
    expect(list.iterate().length).toBe(2)
    expect(list.iterate()[0]).toBe(2)
    expect(list.iterate()[1]).toBe(3)

    list.addAtBeginning(new Cell(1))
    expect(list.iterate().length).toBe(3)
    expect(list.iterate()[0]).toBe(1)
    expect(list.iterate()[1]).toBe(2)
  })

  it('find Cell', () => {
    const list = new LinkedList()
    list.addAtBeginning(new Cell(3))
    list.addAtBeginning(new Cell(2))
    list.addAtBeginning(new Cell(1))

    const cell = list.findCell(2)
    expect(cell?.value).toBe(2)

    const nullCell = list.findCell(200)
    expect(nullCell).toBe(null)
  })

  it('insert cell', () => {
    const list = new LinkedList()
    list.addAtBeginning(new Cell(3))
    list.addAtBeginning(new Cell(2))
    list.addAtBeginning(new Cell(1))

    list.insert(2, new Cell(100))
    expect(list.iterate().length).toBe(4)
    expect(list.iterate()[2]).toBe(100)
  })

  it('delete after', () => {
    const list = new LinkedList()
    list.addAtBeginning(new Cell(3))
    list.addAtBeginning(new Cell(2))
    list.addAtBeginning(new Cell(1))

    list.deleteAfter(2)
    expect(list.iterate().length).toBe(2)
    expect(list.iterate()[1]).toBe(2)
  })
})
