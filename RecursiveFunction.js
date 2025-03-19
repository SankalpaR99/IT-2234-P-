//write a recursive function to print numbers from 1-n

function recursivePrintNum(i,y){
    if(i == y+1){
        return 1
    }

    else{
        console.log(i)
        recursivePrintNum(i=i+1,y)
    }
}

console.log(recursivePrintNum(1,10))



//write a recursive function to print numbers from n-1(reverse)


function recursivePrintReverseNum(z){
    if(z==0){
        return 1
    }
    else{
        console.log(z)
        recursivePrintReverseNum(z-1)
    }
}
console.log(recursivePrintReverseNum(10))
