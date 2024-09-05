function checkProbabilityTheory(count) {    
    let evenCount = 0; 
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.round(Math.random() * (1000 - 100 + 1)) + 100;    
        if (randomNumber % 2 === 0) {
            evenCount++;        
        } 
            else {
            oddCount++;        
        }
    }
       
    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;
       
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercent.toFixed(2)} %`);
    console.log(`Відсоток не парних чисел: ${oddPercent.toFixed(2)} %`);
}

checkProbabilityTheory(50);