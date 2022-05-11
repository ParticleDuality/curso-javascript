
function calculateAverage (list){
  const listSum = list.reduce((accumulator = 0, element) => accumulator + element)
  
  return listSum / list.length
}