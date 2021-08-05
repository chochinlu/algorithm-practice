export class Cell {
  value?: number
  next?: Cell
  prev?: Cell

  constructor(value?: number, next?: Cell, prev?: Cell) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

export class DoublyLinkedList {
  top: Cell = new Cell()
  bottom: Cell

  constructor() {
    this.bottom = new Cell()
    this.bottom.prev = this.top
    this.top.next = this.bottom
  }

  iterate(): Array<number | null> {
    const result: Array<number | null> = []
    let cell = this.top
    while (cell.next && cell.next.value) {
      result.push(cell.next.value)
      cell = cell.next
    }

    return result
  }

  reverseIterate(): Array<number | null> {
    const result: Array<number | null> = []
    let bottom = this.bottom
    while (bottom.prev && bottom.prev.value) {
      result.push(bottom.prev.value)
      bottom = bottom.prev
    }
    return result
  }

  // Enqueue
  addAtBeginning(newCell: Cell) {
    newCell.next = this.top.next
    newCell.prev = this.top

    if (this.top.next) {
      this.top.next.prev = newCell
      this.top.next = newCell
    }
  }

  addAtEnd(newCell: Cell) {
    newCell.next = this.bottom
    newCell.prev = this.bottom.prev
    if (this.bottom.prev) {
      this.bottom.prev.next = newCell
      this.bottom.prev = newCell
    }
  }

  findCell(target: number): Cell | null {
    let cell = this.top
    while (cell.next) {
      if (cell.value === target) {
        return cell
      }
      cell = cell.next
    }
    return null
  }

  insert(value: number, newCell: Cell) {
    let target = this.findCell(value)
    if (target !== null) {
      newCell.next = target.next
      newCell.prev = target
      if (target.next) {
        target.next.prev = newCell
        target.next = newCell
      }
    }
  }

  deleteAfter(value: number) {
    let target = this.findCell(value)
    if (target !== null && target.next) {
      target.next = target.next.next
      if (target.next && target.next.next) {
        target.next.next.prev = target
      }
    }
  }
}
