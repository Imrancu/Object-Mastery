function doSomething() {
    console.log(3333);
}
console.log(2222);
// setTimeout(function() {
//     console.log("Lazy and waiting for time");
// }, 3000)
setInterval(() => {
    console.log("doing it");
}, 2000)
console.log(4444);
console.log(5555);
console.log(6666);