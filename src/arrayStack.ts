export class ArrayStack {
  _values: Array<number | undefined>
  nextIndex = 0

  constructor(arrNums: number) {
    this._values = new Array(arrNums)
  }

  get values() {
    return this._values
  }

  push(num: number) {
    if (this.nextIndex + 1 > this.values.length) {
      return
    }
    this.values[this.nextIndex] = num
    this.nextIndex = this.nextIndex + 1
  }

  get pop() {
    if (this.nextIndex === 0) {
      return undefined
    }

    this.values[this.nextIndex] = undefined

    this.nextIndex = this.nextIndex - 1
    return this.values[this.nextIndex]
  }

  get all() {
    return this.values
  }
}