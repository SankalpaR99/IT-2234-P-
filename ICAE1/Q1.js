//Q1

function maxPurchase(budget, keyboards, mice) {
    let maxAmount = -1; 
    for (let k of keyboards){
        for (let m of mice) {
            let total = k + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total; 
            } 
        } 
    } 
    return maxAmount;
}

console.log(maxPurchase(60, [40, 50, 60], [5, 8, 12]));
console.log(maxPurchase(10, [3, 1], [5, 2, 8]));
console.log(maxPurchase(20, [30, 15], [8, 10, 6]));