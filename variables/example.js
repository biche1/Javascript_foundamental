// const  
// var
// let 

const PI = 3.14
let a = "hello"
// function with void returned type.
var bx = "let try something"
function calRadius(radius) {
    bx = "changed"
    let a = "world"
 const result =   PI * sqrt(radius)
    console.log("Area of the Circle: ",Math.round(result), a);
} 

// function with returned type.
function calRadiusx(radius) {
    return PI * sqrt(radius)
}

function sqrt(value) {
    return Math.sqrt(value)
}

// calRadius(40)
const  area = calRadius(50)

// const r  = Math.round(area)

console.log(bx);