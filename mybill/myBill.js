// Implement a bill calculator

// Each bill is an object that has prices and taxRate
// { prices: [5, 15, 33], taxRate: 1.13}
// a bill subtotal is (sum of prices) * taxRate

//should have a getSubTotal function

// should have a calcTips function that
// if a bill subtotal is less than 30, return 0
// if a bill subtotal is greater than or equal to 30 and less than 300,return bill subTotal * 0.1
// if a bill subtotal is greater than or equal to 300, , return subTotal * 0.25;

// The bill calculator function should be named as `billCalculator`
// The bill calculator should take an array of bills as input and return the array of total(billSubtotal + tips);

const myBills = [
    { prices: [5, 15, 33], taxRate: 1.13 },
    { prices: [3], taxRate: 1.15 },
    { prices: [150, 77, 68], taxRate: 1.05 }
];

function getSubTotal(prices, taxRate) {
    let pricesTotal = 0;
    for(let i = 0; i < prices.length; i++) {
        pricesTotal += prices[i];
    }

    let subTotal = 0;
    subTotal = pricesTotal * taxRate;
    return subTotal;
}

function calcTips(subTotal) {
    let tips = 0;
    if(subTotal < 30){
        return tips;
    }else if (subTotal >= 30 && subTotal < 300){
        tips = subTotal * 0.1;
    }else if (subTotal >= 300){
        tips = subTotal * 0.25;
    }
    return tips;
}

function billCalculator(bills) {
    let result = [];
    for(let i = 0; i < bills.length; i++){
        let subTotal = getSubTotal(bills[i].prices, bills[i].taxRate);
        let tips = calcTips(subTotal);
        let sum = subTotal + tips;
        result.push(sum);
    }
    return result;
}

const result = billCalculator(myBills);
// console.log(myBills[0].taxRate);
console.log(result);
// [65.87899999999999, 3.4499999999999997, 387.1875]
