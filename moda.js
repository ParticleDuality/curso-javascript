var list = [
  1,
  2,
  3,
  1,
  3,
  2,
  4,
  1
]

const listCount = {}

list.map((element) => {
  if (listCount[element]) {
    listCount[element] += 1
  } else {
    listCount[element] = 1
  }
})

let resultArray = Object.entries(listCount).sort((acc, element) => acc[1] - element[1])

const moda = resultArray[resultArray.length - 1]