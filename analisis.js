// Helpers
function calculateAverage (list){
  const listSum = list.reduce((accumulator = 0, element) => accumulator + element)
  
  return listSum / list.length
}

const isEven = (number) => (number % 2 === 0)
// End helpers

const salaries = colombia.map((element) => element.salary)
const salariesSorted = salaries.sort((prevValue, nextValue) => prevValue - nextValue)

// Calcular medianan general
const salaryMedian = (list) => {
  let result = null
  const half = parseInt(list.length / 2)

  isEven(list.length) ? result = calculateAverage([list[half - 1], list[half]]) : result = list[half]

  return result
}

const generalSalaryMedian = salaryMedian(salariesSorted)

// Calcular mediana top 10
const spliceStart = parseInt((salariesSorted.length * 90) / 100)
const spliceEnd = salariesSorted.length - spliceStart
const topTenSalaries = salariesSorted.splice(spliceStart, spliceEnd)

const topTenSalaryMedian = salaryMedian(topTenSalaries)

console.log({
  generalSalaryMedian,
  topTenSalaryMedian
});