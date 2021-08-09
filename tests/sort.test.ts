import { bubbleSort, insertionSort, selectionSort } from '../src/sort'

describe('sort', () => {
  describe('insertion sort', () => {
    it('sort 1', () => {
      const array = [7, 4, 5, 2]
      expect(insertionSort(array)).toStrictEqual([2, 4, 5, 7])
    })
  })

  describe('selection sort', () => {
    it('sort 1', () => {
      const array = [7, 4, 5, 2]
      expect(selectionSort(array)).toStrictEqual([2, 4, 5, 7])
    })
  })

  describe('bubble sort', () => {
    it('sort 1', () => {
      const array = [7, 4, 5, 2]
      expect(bubbleSort(array)).toStrictEqual([2, 4, 5, 7])
    })
  })
})
