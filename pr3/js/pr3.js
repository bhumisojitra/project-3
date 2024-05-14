// pr3-1
let a = 1;
let p = document.querySelector('p');

while(a <= 10){
    p.innerHTML += ('6 * ' + a + ' = ' + 6 * a + '<br>');
    a++;
} 

// pr3-2
let c = 1;
let n = 5;
let fact = 1;
let h2 = document.querySelector('h2');

while(c <= n){
    fact = fact * c;
    c++;
}
h2.innerHTML += ('factorial is =' + fact + '<br>');

// pr3-3
let sum = 0;
let number = 153;

let temp = number; 

while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}

if (sum == number) {
    document.querySelector('h2').innerHTML += `${number} = is an Armstrong number.`;
}
else {
    document.querySelector('h2').innerHTML += `${number} = is not an Armstrong number.`;
}


//pr3-14
let i = 1;
let j = 1;
let k = 1;
let h3 = document.querySelector('h3');

for(i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        h3.innerHTML += k;
        k++;
    }
    h3.innerHTML += '<br>';
}