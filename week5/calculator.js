const calculator = (operator, ...numbers) => {
 
    let result = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (operator === '/' && numbers[i] === 0) {
            return 'Tidak bisa dibagi';
        }
        
        switch (operator) {
            case '+': result += numbers[i]; break;
            case '-': result -= numbers[i]; break;
            case '*': result *= numbers[i]; break;
            case '/': result /= numbers[i]; break;
            case '%': result %= numbers[i]; break;
            default: return 'Error';
        }
    }
    
    return result;
};

console.log(calculator('+', 10, 5)); 
console.log(calculator('-', 20, 5, 3)); 
console.log(calculator('*', 2, 4, 5)); 
console.log(calculator('/', 100, 2, 5)); 
console.log(calculator('%', 10, 3)); 
console.log(calculator('/', 4, 0)); 
