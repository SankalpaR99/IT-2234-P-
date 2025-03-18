//reverse the array using push and pop
// a b c d -> d c b a


console.log("Reverese the array using push and pop -> ['a','b','c','d']")

let arr1 = ['a','b','c','d']
let arr2 = []

for(let i=arr1.length; i>0; i--)
{
   arr2.push(arr1.pop())
}
console.log(arr2)
