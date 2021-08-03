export class Cell {
  value: number | null
  next: Cell | null

  constructor(value: number | null, next: Cell | null = null) {
    this.value = value
    this.next = next
  }
}

export class LinkedList {
  cell: Cell = new Cell(null, null)

  iterate(): Array<number | null> {
    const result: Array<number | null> = []
    let cell = this.cell
    while (cell.next !== null) {
      result.push(cell.next.value)
      cell = cell.next
    }

    return result
  }

  findCell(target: number): Cell | null {
    let cell = this.cell
    while (cell.next !== null) {
      if (cell.value === target) {
        return cell
      }
      cell = cell.next
    }
    return null
  }

  addAtBeginning(newCell: Cell) {
    newCell.next = this.cell.next
    this.cell.next = newCell
  }

  addAtEnd(newCell: Cell) {
    // get last cell
    let last = this.cell
    while (last.next !== null) {
      last = last.next
    }
    last.next = newCell
  }

  insert(value: number, newCell: Cell) {
    let target = this.findCell(value)
    if (target !== null) {
      newCell.next = target.next
      target.next = newCell
    }
  }

  deleteAfter(value: number) {
    let target = this.findCell(value)
    if (target !== null && target.next !== null) {
      target.next = target.next.next
    }
  }
}
