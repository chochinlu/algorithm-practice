export function insertionSort(array: number[]) {
  if (array.length <= 1) {
    return array
  }

  for (let i = 1; i < array.length; i++) {
    let ele = array[i]
    let j = i - 1
    for (; j >= 0 && array[j] > ele; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = ele
  }
  return array
}

export function selectionSort(array: number[]) {
  if (array.length <= 1) {
    return array
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }

  return array
}

export function bubbleSort(array: number[]) {
  if (array.length <= 1) {
    return array
  }

  let notSorted = true
  while (notSorted) {
    notSorted = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        let temp = array[i]
        array[i] = array[i - 1]
        array[i - 1] = temp
        notSorted = true
      }
    }
  }

  return array
}
