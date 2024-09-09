const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

services.price = function() {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] !== 'function'){
            sum += parseInt(this[key]);
        }
    }
    return sum;
};

services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] !== 'function') {
            let price = parseInt(this[key]);
            if (price <= min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function() {
    let max = 0;
    for (let key in this) {
        if (typeof this[key] !== 'function') {
            let price = parseInt(this[key]);
            if (price >= max) {
                max = price;
            }
        }
    }
    return max;
};


console.log(services.price()+ ' грн');
console.log(services.minPrice()+ ' грн');
console.log(services.maxPrice()+ ' грн');

services['Розбити скло'] = "200 грн";

console.log('\n');
console.log(services.price()+ ' грн');
console.log(services.minPrice()+ ' грн');
console.log(services.maxPrice()+ ' грн');