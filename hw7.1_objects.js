let house = {
    roomName: 'Kitchen',
    mainColor: 'White',
    square: 21,

    getInfo() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

house.getInfo();
console.log('\n');

house.numberOfFloar = 1;
house.getInfo();
