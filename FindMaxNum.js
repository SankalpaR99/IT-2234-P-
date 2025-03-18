//finding the maximum number in the array using foreach loop
let numArr = [1,2,3,4,5]
let max = 0;

numArr.forEach((n)=>{
     if(max<n){
        max = n
     }

     //(max<n) && (max=n)
     
})
console.log(max)
console.log()

