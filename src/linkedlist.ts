namespace Link {
  class Cell {
    value: number | null
    visited: boolean
    next: Cell

    constructor(value: number = null, next: Cell = null) {
      this.value = value
      this.visited = false
      this.next = next
    }
  }

  // create a linked list:  9 - 31 - 47 - 72 - 9999
  const tail = new Cell(9999)
  const cellD = new Cell(72, tail)
  const cellC = new Cell(47, cellD)
  const cellB = new Cell(31, cellC)
  const cellA = new Cell(9, cellB)

  let current: Cell = new Cell(null, cellA)

  function iterate(list: Cell): void {
    let now = list
    while (now.next !== null) {
      console.log(now.next.value)
      now = now.next
    }
  }

  function oriFindCell(value: number, list: Cell): Cell | null {
    let now = list
    while (now !== null) {
      if (now.value === value) {
        return now
      }
      now = now.next
    }
    return null
  }

  // 使用哨兵
  function findCell(value: number, list: Cell): Cell | null {
    let now = list
    while (now.next !== null) {
      if (now.next.value === value) {
        return now
      }
      now = now.next
    }
    return null
  }

  function addAtBeginning(newCell: Cell, list: Cell): Cell {
    newCell.next = list.next
    list.next = newCell
    return list
  }

  function addAtEnd(newCell: Cell, list: Cell): Cell {
    let last = list
    while (last.next !== null) {
      last = last.next
    }

    last.next = newCell
    return list
  }

  // function insertCell(newCell: Cell, afterMeValue: number, list: Cell): Cell {
  //   let now = list
  //   while (now.next !== null) {
  //     if (now.next.value === afterMeValue) {
  //       newCell.next = now.next
  //       now.next = newCell
  //       return list
  //     }
  //     now = now.next
  //   }
  //   return list
  // }

  // function insertCell(afterMe: Cell, newCell: Cell): void {
  //   newCell.next = afterMe.next
  //   afterMe.next = newCell
  // }

  function insertCell(newCell: Cell, top: Cell): void {
    // find the afterMe cell
    while (top.next.value < newCell.value) {
      top = top.next
    }

    // insert the new cell
    newCell.next = top.next
    top.next = newCell
  }

  function deleteAfter(cell: Cell, list: Cell): Cell {
    let now = list
    while (now.next !== null) {
      if (now.next.value === cell.value) {
        now.next = now.next.next
        return list
      }
      now = now.next
    }
    return list
  }

  function copyList(oldList: Cell): Cell {
    let newCell = new Cell() //哨兵
    const newList = newCell
    let list = oldList.next // 跳過哨兵

    while (list !== null) {
      newCell.next = new Cell()
      newCell = newCell.next
      newCell.value = list.value

      list = list.next
    }

    return newList
  }

  function hasLoopMarking(source: Cell): boolean {
    let hasLoop = false
    let top = source
    const list = top

    while (top.next != null) {
      if (top.next.visited) {
        hasLoop = true
        top.next = null
        break
      }
      top = top.next
      top.visited = true
    }

    // reset visited
    top = list
    while (top.next !== null) {
      top.visited = false
      top = top.next
    }

    console.log(JSON.stringify(list))
    return hasLoop
  }

  function hasLoopRestracing(sentinel: Cell): boolean {
    let cell = sentinel

    while (cell.next !== null) {
      console.log('--------------------')
      console.log('cell: ', cell.value)
      let tracer = sentinel
      while (tracer.value !== cell.value) {
        console.log('tracer: ', tracer.value)
        if (tracer.next.value === cell.next.value) {
          // it's the start of a loop
          // break the loop and return tru
          // cell.next = null
          return true
        }
        tracer = tracer.next
      }
      cell = cell.next
    }
    return false
  }

  function reverseList(sentinel: Cell): Cell {
    let prevCell = null
    let currCell = sentinel

    while (currCell !== null) {
      let nextCell = currCell.next
      currCell.next = prevCell

      prevCell = currCell
      currCell = nextCell
    }

    return prevCell
  }

  // console.log(findCell(20, current))
  // console.log(findCell(72, current))
  // console.log(findCell(9, current))
  // console.log(findCell(31, current))

  // const newCell = new Cell(100)
  // const newList = addAtBeginning(newCell, current)
  // iterate(newList)

  // const newList = addAtEnd(newCell, current)
  // iterate(newList)

  // const newCell2 = new Cell(20)
  // const newList = deleteAfter(newCell2, current)
  // iterate(newList)

  // const newList = insertCell(newCell2, 47, current)
  // iterate(newList)

  // insertCell(cellB, newCell2)
  // iterate(current)

  // insertCell(newCell2, current)
  // iterate(current)

  // const newList = copyList(current)
  // console.log(JSON.stringify(newList))
  // iterate(newList)
  // console.log(newList)

  const cellJ = new Cell(6)
  const cellI = new Cell(5)
  const cellH = new Cell(4)
  const cellG = new Cell(3)
  const cellF = new Cell(2)
  const cellE = new Cell(1)

  // 1 2 3 4 5 6 3 ...
  const hasLoopList = new Cell(null, cellE)
  cellE.next = cellF
  cellF.next = cellG
  cellG.next = cellH
  cellH.next = cellI
  cellI.next = cellJ
  cellJ.next = cellG

  // console.log(hasLoopMarking(hasLoopList))

  // console.log(hasLoopRestracing(hasLoopList))
  // console.log(hasLoopRestracing(current))

  const reveredCurrent = reverseList(current)
  iterate(reveredCurrent)
}
