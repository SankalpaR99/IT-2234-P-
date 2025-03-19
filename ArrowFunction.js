//arrow function

/*function PrintMsg(){
    console.log.("Hello JS")
}
*/

const msg = ()=>{return console.log("Hey JS")}
//console.log(msg)
msg()

//write an arrow function to find the sum of two numbers
const add = (a,b) => {return a+b}
console.log(add(4,5))

const mul = (a,b=2) => {return a*b}
console.log(mul(4,5))
console.log(mul(4))

const mysum = (...n) => {
    console.log(n)
}

mysum(4,5,6,89,2)


const mysum1 = (...n) => {
    a = n
    let sum = 0 
    for(let i = 0; i<a.length; i=i+1){
        sum = sum + a[i]

    }
    console.log(sum)
}
mysum1(14,55,6,89,2)

//rest parameter
/*
const mysum = (...n)=>{
    console.log(n)
}
    
const mysum = (...n)=>{
    let t=0
    n.forEach((i)=>t=t+i)
    console.log(t)
    }
*/

const mysum3 = (...n) => {
    return n.reduce((t,i)=>t=t+i)
}
console.log(mysum3(4,5,6,8,2))
