// Ejercicio 1:

function forLoop(limit) {
    var total = 0;
    
    for(var i=0; i<=limit; i++)
    {
        total = total +i;       
    }

    return total;
}

//  Ejercicio 2:

function sumaPares(n) 
{
    var suma = 0;
    
    for (var i=0 ; i<=n ; i+=2)
    {
        suma = suma +i;
    }
    return suma;  
}

// Ejercicio 3:

function factorial(n) 
{

    var factorial = 1;
    
    if (n<=0){
        return null;
    }else{
        for (var i=1 ; i<=n ; i++)
    {
        factorial *= i;
    }
    return factorial; 
    }

}