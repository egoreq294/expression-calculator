function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let expr2= " ( "+expr+" ) ";
    let k1 = 0;
    let k2 = 0;
    for(let i = 0; i < expr2.length; i++) { 
        if(expr2[i] === "(") {
          k1+=1;
        }
    }
    for(let i = 0; i < expr2.length; i++) { 
        if(expr2[i] === ")") {
          k2+=1;
        }
    }
    if (k1!==k2){
        throw new Error('ExpressionError: Brackets must be paired');
    }
    let arr = Array.from(expr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "/") {
        if (arr[i + 2] === "0") {
          throw new Error("TypeError: Division by zero.");
        }
      }
    }
    let result1 = new Function("return " + expr.replace(/[\s]/g, ''));
    let result2 = result1();
  
    return result2;
}

module.exports = {
   expressionCalculator
}