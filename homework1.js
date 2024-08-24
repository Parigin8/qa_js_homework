//1)	
'number' + 3 + 3
// Крок 1: 'number' + 3
console.log('number' + 3); // 'number3' (тип: string)
// Крок 2: 'number3' + 3
console.log('number3' + 3); // 'number33' (тип: string)


//2)	
null + 3
// Крок 1: null перетворюється на 0 (тип: number)
// Крок 2: 0 + 3
console.log(null + 3); // 3 (тип: number)


//3)	
5 && "qwerty"
// Крок 1: 5 є true (тип: boolean)
// Крок 2: "qwerty" є true (тип: boolean)
console.log(5 && "qwerty"); // "qwerty" (тип: string), повертає останнє істинне значення 


//4)	
+'40' + +'2' + "hillel";
// Крок 1: +'40' перетворюється в число
console.log(+'40'); // 40 (тип: number)
// Крок 2: +'2' перетворюється в число
console.log(+'2'); // 2 (тип: number)
// Крок 3: 40 + 2
console.log(40 + 2); // 42 (тип: number)
// Крок 4: 42 + "hillel"
console.log(42 + "hillel"); // "42hillel" (тип: string)


//5)	
'10' - 5 === 6;
// Крок 1: '10' перетворюється в число (тип: number)
// Крок 2: 10 - 5
console.log('10' - 5); // 5 (тип: number)
// Крок 3: 5 === 6
console.log(5 === 6); // false (тип: boolean)


//6)	
true + false
// Крок 1: true перетворюється в 1 (тип: number)
// Крок 2: false перетворюється в 0 (тип: number)
// Крок 3: 1 + 0
console.log(true + false); // 1 (тип: number)


//7)	
'4px' - 3
// Крок 1: '4px' не може бути перетворено на число
// Крок 2: '4px' - 3
console.log('4px' - 3); // NaN (тип: number)


//8)	
'4' - 3
// Крок 1: '4' перетворюється в число (тип: number)
// Крок 2: 4 - 3
console.log('4' - 3); // 1 (тип: number)


//9)	
'6' + 3 ** 0;
// Крок 1: 3 ** 0 = 1 (тип: number)
// Крок 2: '6' + 1
console.log('6' + 1); // '61' (тип: string)


//10)	
12 / '6'
// Крок 1: '6' перетворюється в число (тип: number)
// Крок 2: 12 / 6
console.log(12 / '6'); // 2 (тип: number)


//11)	

'10' + (5 === 6);

// Крок 1: (5 === 6) = false (тип: boolean)
// Крок 2: '10' + false
console.log('10' + (5 === 6)); // '10false' (тип: string)


//12)	
null == ''
// Крок 1: null == ''
console.log(null == ''); // false (тип: boolean)


//13)	
3 ** (9 / 3);
// Крок 1: 9 / 3 = 3 (тип: number)
// Крок 2: 3 ** 3
console.log(3 ** 3); // 27 (тип: number)


//14)	
!!'false' == !!'true'
// Крок 1: !!'false'
console.log(!!'false'); // true (тип: boolean)
// Крок 2: !!'true'
console.log(!!'true'); // true (тип: boolean)
// Крок 3: true == true
console.log(!!'false' == !!'true'); // true (тип: boolean)


//15)	
0 || '0' && 1
// Крок 1: '0' && 1 — && повертає останнє істинне, тобто 1
// Крок 2: 0 || 1 — || повертає перше істинне, тобто 1

console.log(typeof(0 || '0' && 1)); // 1 (тип: boolean)

//16)	
(+null == false) < 1;

// Крок 1: +null перетворюється в 0
// Крок 2: 0 == false, тобто true.
// Крок 3: true < 1 тобто, true перетворюється в 1
console.log((+null == false) < 1); //false (тип: boolean)

//17)	
false && true || true
// Крок 1: false && true // false (тип: boolean)
// Крок 2: false || true
console.log(false || true); // true (тип: boolean)


//18)	
false && (false || true);
// Крок 1: false || true // true (тип: boolean)
// Крок 2: false && true
console.log(false && (false || true)); // false (тип: boolean)


//19)	
(+null == false) < 1 ** 5;

// Крок 1: +null == false // true (тип: boolean)
// Крок 2: 1 ** 5 // 1 (тип: number)
// Крок 3: true < 1 // 1<1
console.log((+null == false) < 1 ** 5); // false (тип: boolean)
