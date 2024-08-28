
// hometask
function countEvensAndOdds(numbers) {
    let evens = 0;
    let odds = 0;
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    
    return { evens: evens, odds: odds };
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = countEvensAndOdds(numbers);
console.log(`Even numbers: ${result.evens}, Odd numbers: ${result.odds}`);



// hometask
function sortByBirth(data) {
    return data.sort((a, b) => {
        const yearA = parseInt(a.split(', ')[1]);
        const yearB = parseInt(b.split(', ')[1]);
        return yearA - yearB;
    });
}


const data = ["Elvin, 2004", "Rehim, 2009", "Eli, 2001"];
const sortedData = sortByBirth(data);
console.log(sortedData);

// hometask
function addTax(prices) {
    const EDV_RATE = 0.20;  
    const pricesWithTax = [];
    
    for (let i = 0; i < prices.length; i++) {
        pricesWithTax.push(prices[i] * (1 + EDV_RATE));
    }
    
    return pricesWithTax;
}


const pricesWithoutTax = [600, 800, 900];
const pricesWithTax = addTax(pricesWithoutTax);
console.log(pricesWithTax);



