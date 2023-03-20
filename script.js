// Roma, 20-03

/* function reverseNumber(num)
{    
    let result = 0;
    let cifra_estratta;
    
    while(num > 0) { 
        cifra_estratta = num % 10; 
        num = Math.floor(num / 10);
        result = (result * 10)+ cifra_estratta;
    } 
    return result;
}      

console.log(reverseNumber(256)) */

/* 
function bubbleSort(arr)
{
    let temp;
    let sorted = false;
    while(sorted == false) {
        sorted = true;
        for(let i = 0; i < arr.length; i++)
        {
            if (arr[i] > arr[i+1]) 
            {
                console.log('ho effettuato uno scambio')
                temp = arr[i]; 
                arr[i] = arr[i+1];
                arr[i+1] = temp; 
                sorted = false;
            }
        }
    }
    return arr;
}

const arr = [10,2,15,7,9,20];
console.log(bubbleSort(arr))
*/

// ESERCIZI POMERIGGIO


// 1. Calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4. 
//Potete usare Math


/* let a = 3;
let b = 4;

function ipotenusa(a,b) {
    
    return Math.sqrt(a * a + b * b);
    
}

console.log(ipotenusa(a,b)) */

// 2. scrivere una funzione che trasformi un nome nelle sue iniziali "Tizio Caio" => T.C.

/* METODO 1 
function onlyCapital(str)
{
    let onlyCaps = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i].match(/[A-Z]/))
        {
            onlyCaps += str[i];
        }
    }
    return onlyCaps;
}
console.log(onlyCapital("Desirée Totaro")) */

/* METODO 2 

function onlyCapital(str)
{
    let result = "";
    let splitted = str.split(" ")
    for (let i = 0; i < splitted.length; i++) {
        result += splitted[i][0] + '.'        
    }
    return result;
}

console.log(onlyCapital("Desirée Totaro"))
*/


// 3. scrivere una funzione che , dati 3 numeri, ritorni true se questi 3 numeri possono formare un triangolo. False altrimenti

/* function canBeATriangle(a,b,c)
{
    
    if (a < (b + c) && a > (b - c)) {
        return true
    } else if (b < (a + c) && b > (a - c))
    {
        return true
    } else if (c < (a + b) && c > (a - b))
    {
        return true
    } else {
        return false;
    }
}

console.log(canBeATriangle(5,2,3)) */

// 4. congettura di Collatz: preso un numero maggiore di 1, se questo è pari dividerlo 
// per due, se dispari moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il 
// numero di partenza, l'algoritmo termina sempre ad uno. Scrivere una funzione che 
// implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni iterazione


/* function getCollatzed(num) {
    let arr = [num];
    if(num <= 1){
        console.log('Il numero è minore di 1');
    }
    while (num > 1) {
        if(num % 2 == 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        arr.push(num)
    }
    return arr;
}

console.log(getCollatzed(5)) */

// 5. Scrivere una funzione che, assegnato un numero n, ritorni la successione di 
// fibonacci fino al numero n sottoforma di array.
// Ad esempio 3 => [1,1,2], 9 => [1,1,2,3,5,8,13,21,34]

/* function fibonacci(num) {
    let fib = [];
    let x = 0;
    let y = 1;
    let z;
    
    fib.push(x);
    fib.push(y);
    
    let i = 2;
    while (i < num) {
        z = x + y;
        x = y;
        y = z;
        
        fib.push(z);
        i = i + 1;
    }
    return fib;
}

let num = 9;
fib = fibonacci(num);

console.log(fib); */

//6.scrivere una funzione che, assegnato un numero n, ritorni se è primo

/* function primeNumbers(number)
{
    if ( number == 1 || number == 2 ) {
        return true;
    }
    for ( let i = 2; i < number; i++ ) {
        if ( number % i == 0 ) {
            return false;
        }
    } 
    return true;
};

console.log(primeNumbers(7)) */

// 7.scrivere una funzione che assegnata una stringa ritorni la somma delle cifre in essa presenti.
// Ad esempio "Sono 1 stringa di 6 parole" => 7

/* function checkNumbers(str)
{
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\d+/)) 
        {
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(checkNumbers("C1ao a tutt1")) */

// 8. scrivere una funzione che trasformi un numero in ore e minuti. Ad esempio 3014 => 50:14. 
// Devono essere sempre presenti due cifre, sia per le ore che per i minuti

/* let num = 3014
let ore = Math.floor(num/60)
let minuti = Math.floor(num % 60)
console.log(ore + ":" + minuti) */

// 9. scrivere una funzione che, assegnata una stringa, ritorni l numero di vocali presenti. 
//Gestire le maiuscole

/* function contaVocali(str)
{
    let vocali = "aeiouAEIOU"
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if(vocali.includes(str[i]))
        {
            counter++ 
        }       
    }
    return counter;
}

console.log(contaVocali("Ciao a tutti amicii")) */

// 10. scrivere una funzione che accetta una stringa e restituisce la parola più lunga

/* function longestWord(str) {
   let splitted = str.split(" ");
   let longest = "";
   for (let i = 0; i < splitted.length; i++) {
    if(splitted[i].length > longest.length)
    {
        longest = splitted[i];
    } 
   }
   return longest;
}

console.log(longestWord("Ciao a tutti amicissimi"))
 */

// 11. scrivere una funzione che accetti una stringa contenente solo caratteri 
// x e y e ritorni true se il numero delle x è uguale al numero delle y

/*  function onlyXandY(str)
{
   let x = 0;
   let y = 0;

   
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x" || str[i] == "X")
        {
            x++;
        } else if (str[i] == "y" || str[i] == "Y")
        {
            y++;
        } else
        {
            return "Non sono consentite queste lettere";
        }      
    }
    return x === y;
}

console.log(onlyXandY("xyxyx")) */
