function pow(x, y) {
    let result = 1;
    if(y>=0){
    for (let i = 0; i < y; i++) {
        result *= x;
    }
}
else if(y<0 && x!=0){
    let j=1;
    for (let i=0; i<-(y);i++){
        j*=x;
    }
    result=1/j;
}
else if(y<0 && x==0){
   let error="Infinity, Ділити на нуль не можна";
   result=error;
    }
  
return result;
}

console.log(pow(2,8));
console.log(2**8); // для перевірки роботи функції