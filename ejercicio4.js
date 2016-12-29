function stringMultiplicar(n) {
    var rpta;
    var salida ="";
    for(var i=1; i<=10; i++)
    {
        rpta=n*i;
        salida=salida+n+"x"+i+"="+rpta;
        if((i+1)<=10)
        {
            salida += "/";
        }
    }
    return salida;
}