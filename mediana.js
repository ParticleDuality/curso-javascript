const list = [
  500, 40, 100, 23
]

list.sort((a, b) => a - b)

let median = 0

let isEven = (list) => list.length % 2 === 0

function calculateAverage (list){
  const listSum = list.reduce((accumulator = 0, element) => accumulator + element)
  
  return listSum / list.length
}

let mediumPosition = parseInt(list.length / 2)

if (isEven(list)) {
  const element1 = list[mediumPosition - 1]
  const element2 = list[mediumPosition]

  median = calculateAverage([element1, element2])
} else {
  median = list[mediumPosition]
}