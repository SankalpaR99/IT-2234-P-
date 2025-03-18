//find the most frequent element in the array
//[4,8,3,4,3,2,1,8,4]

let arr = [4,8,3,4,3,2,1,8,4]

let maxCount = 0
let mostFrequent
for (let i=0; i<arr.length; i++) {
    let count = 0;
    for (let j=0; j<arr.length; j++) {
        if(arr[i] == arr[j]){ 
            count++;
        }
    }
    if(count > maxCount){
        maxCount=count
        mostFrequent = arr[i];
    }
}
console.log("Most Frequent Element:")
console.log(mostFrequent)