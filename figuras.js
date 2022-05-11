// Código del cuadrado
console.group('Cuadrado');

const squareSide = 5;

let squarePerimeter = (side) => side * 4;
let squareArea = (side) => side * side;

console.log(`Los lados del cuadrado miden: ${squareSide} cm`);
console.log(`El perímetro del cuadrado es: ${squarePerimeter(squareSide)} cm`);
console.log(`El área del cuadrado es: ${squareArea(squareSide)} cm²`);

console.groupEnd('Fin Cuadrado');

// Código del triángulo
console.group('Triángulo');

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

let trianglePerimeter = (side1, side2, base) => {
  return side1 + side2 + base
}

let triangleArea = (base, height) => (base * height) / 2

console.log(`Lados del triángulo: Lado 1: ${triangleSide1} cm, Lado 2: ${triangleSide2} cm, Base: ${triangleBase} cm: Altura: ${triangleHeight}`);
console.log(`El perímetro del triángulo mide: ${trianglePerimeter(triangleSide1, triangleSide2, triangleBase)} cm`);
console.log(`El área del triángulo mide: ${triangleArea(triangleBase, triangleHeight)} cm²`);

console.groupEnd('Fin Triángulo');

// Código del círculo
console.group('Círculo');

const radius = 5
const pi = Math.PI

const diameter = (radius) => radius * 2
const circlePerimeter = (radius) => diameter(radius) * pi
const circleArea = (radius) => (radius * radius) * pi

console.log(`Radio: ${radius} cm`);
console.log(`Diametro: ${diameter(radius)} cm`);
console.log(`Perímetro: ${circlePerimeter(radius)} cm`);
console.log(`Área: ${circleArea(radius)} cm²`);

console.groupEnd('Fin Círculo');

// Cuadrado
function getSquarePerimeter() {
  const side = Number(document.getElementById('squareInput').value);

  const perimiter = squarePerimeter(side);
  alert(perimiter)
}
function getSquareArea() {
  const side = document.getElementById('squareInput').value;

  const area = squareArea(side);
  alert(area)
}

// Triágulo
function getTrianglePerimeter() {
  const side1 = Number(document.getElementById('triangleSide1Input').value);
  const side2 = Number(document.getElementById('triangleSide2Input').value);
  const base = Number(document.getElementById('triangleBaseInput').value);

  const perimiter = trianglePerimeter(side1, side2, base);
  alert(perimiter)
}
function getTriangleArea() {
  const base = Number(document.getElementById('triangleBaseInput').value);
  const height = Number(document.getElementById('triangleHeightInput').value);

  const area = triangleArea(base, height);
  alert(area)
}

// Círculo
function getCirclePerimeter() {
  const radius = Number(document.getElementById('circleRadiusInput').value);

  const perimiter = circlePerimeter(radius);
  alert(perimiter)
}
function getCircleArea() {
  const radius = Number(document.getElementById('circleRadiusInput').value);

  const area = circleArea(radius);
  alert(area)
}