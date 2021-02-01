export class Cell {
  value: number | null
  next: Cell | null

  constructor(value: number | null = null, next: Cell | null = null) {
    this.value = value
    this.next = next
  }

  push(value: number) {
    this.next = new Cell(value, this.next)
  }

  pop(): Cell | null {
    const next = this.next
    if (next === null) {
      return null
    }
    this.next = next.next
    return next
  }
}

export function iterate(cell: Cell): Array<number | null> {
  let next = cell.next
  let result = []
  while (next !== null) {
    result.push(next.value)
    next = next.next
  }
  return result
}
