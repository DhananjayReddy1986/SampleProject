// 1. Check Prime

function isPrime(n){
    var divisor = 2;
  
    while (n > divisor){
      if(n % divisor == 0){
       return false; 
      }
      else
        divisor++;
    }
    return true;
  }
  
  /*> isPrime(137);
    = true
  > isPrime(237);
    = false */

// 2. Prime Factors 

function primeFactors(n){
    var factors = [], 
        divisor = 2;
    
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  
  /*> primeFactors(69);
    = [3, 23] */

// Fibonacci 

function fibonacci(n){
    var fibo = [0, 1];
    
    if (n <= 2) return 1;
  
    for (var i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
    }
  
   return fibo[n];
  } 
  
  /*> fibonacci(12);
    = 144 */

    // 4 Greatest Common Divisor

    function greatestCommonDivisor(a, b){
        var divisor = 2, 
            greatestDivisor = 1;
      
        //if u pass a -ve number this will not work. fix it dude!!
        if (a < 2 || b < 2)
           return 1;
        
        while(a >= divisor && b >= divisor){
         if(a %divisor == 0 && b% divisor ==0){
            greatestDivisor = divisor;      
          }
         divisor++;
        }
        return greatestDivisor;
      }
      
      /*> greatestCommonDivisor(14, 21);
        =7 
      > greatestCommonDivisor(69, 169);
        = 1 */

    // Remove Duplicates

    function removeDuplicate(arr){
        var exists ={},
            outArr = [], 
            elm;
      
        for(var i =0; i<arr.length; i++){
          elm = arr[i];
          if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
         }
        }
        return outArr;
      }
      
      /*> removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
        = [1, 3, 5, 6, 7, 8] */