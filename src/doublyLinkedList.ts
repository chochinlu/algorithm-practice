namespace DoublyLink {
  class Cell {
    value: number | null
    prev: Cell
    next: Cell

    constructor(value: number = null) {
      this.value = value
      this.prev = null
      this.next = null
    }
  }

  // create a linked list:  31 -> 72 -> 47 -> 9
  const cellD = new Cell(9)
  const cellC = new Cell(47)
  const cellB = new Cell(72)
  const cellA = new Cell(31)
  const start = new Cell()
  const end = new Cell()

  start.next = cellA
  cellA.prev = start
  cellA.next = cellB
  cellB.prev = cellA
  cellB.next = cellC
  cellC.prev = cellB
  cellC.next = cellD
  cellD.prev = cellC
  cellD.next = end
  end.prev = cellD

  function iterate(list: Cell): void {
    let now = list
    while (now.next !== null) {
      if (now.next.value) {
        console.log(now.next.value)
      }
      now = now.next
    }
  }

  // function insertCell(newCell: Cell, afterMeValue: number, list: Cell): Cell {
  //   let now = list
  //   while (now.next !== null) {
  //     if (now.next.value === afterMeValue) {
  //       now.next.next.prev = newCell
  //       newCell.prev = now.next
  //       newCell.next = now.next.next
  //       now.next.next = newCell
  //
  //       return list
  //     }
  //     now = now.next
  //   }
  //   return list
  // }

  function insertCell(afterMe: Cell, newCell: Cell, list: Cell): void{
    newCell.prev = afterMe
    newCell.next = afterMe.next
    afterMe.prev = newCell
    afterMe.next = newCell
  }

  // iterate(start)

  const newCell = new Cell(100)
  // const newList = insertCell(newCell, 31, start)
  // iterate(newList)

  insertCell(cellB, newCell, start)
  iterate(start)
}
