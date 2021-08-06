import { insertionSort } from '../src/sort'

describe('sort', () => {
  describe.only('insertion sort', () => {
    it('sort 1', () => {
      const array = [7,4,5,2]
      expect(insertionSort(array)).toStrictEqual([2,4,5,7])
    })
  })
})