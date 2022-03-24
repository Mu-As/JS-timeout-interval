// setTimeout()
// setTimeout(function, minTimeout, parameter1, parameter2,..)

function sayHello() {
  console.log("Hello.");
}

function sayHelloWithName(name, surname) {
  if (!surname) {
    console.log(`Hello ${name}`);
    console.log(typeof surname);
  } else {
    console.log(`Hello ${name} - ${surname}`);
  }
}

setTimeout(sayHello(), 500);

setTimeout(() => {
  console.log("Another hello.");
}, 1000);

// clearTimeout()
const helloWithName = setTimeout(sayHelloWithName, 1500, "Mu");
clearTimeout(helloWithName);
// sayHelloWithName çalışmadan direkt temizlenir.

// Bir component unmount olduğu zamanlarda değişkenleri, kaynakları vs. temizlemek için kullanılabilir.
// Sonraki çalışmalarda verilerin karışmaması önlenebilir.

// --------------------------------------------------------------- //

// setInterval()
// setInterval(function, minInterval, parameter1, parameter2,..)

function sayBye() {
  console.log("Bye.");
}

function sayByeWithName(param1, param2) {
  if (!param2) {
    console.log(`Bye ${param1}`);
    console.log(typeof param2);
  } else {
    console.log(`Bye ${param1} - ${param2}`);
  }
}

setInterval(sayBye(), 3500);

// setInterval(() => {
//   console.log("5 saniyede bir konsoldayım.");
// }, 5000);

// clearTimeout()
const byeWithName = setInterval(sayByeWithName, 3000, "Good", "Bye");
clearInterval(byeWithName);

// --------------------------------------------------------------- //

// Recursive setTimeout vs setInterval

setTimeout(function run() {
  // her iterasyon öncesi gecikmenin ne kadar olduğu bulunabilir/hesaplanabilir.
  console.log("Recursive run() is running.");
  setTimeout(run, 500);
}, 1000);

setInterval(function run() {
  // sabit aralık süresi
  console.log("setInterval run() is running.");
}, 1500);
