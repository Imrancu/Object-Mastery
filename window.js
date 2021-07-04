 let name = "Rahim"

 function add(num1, num2) {
     var result = num1 + num2
     console.log("inside", name);

     function double(num) {
         return num * 2
     }
     var total = double(result)
     return total
 }

 console.log('Result outside', name);
 let sum = add(30, 20)
 console.log(sum)
 console.log('result Outside', result);