function casiPalindrome(palabra) {
    var tam= palabra.length;
    var palindrome;
    var count = 0;
    
    for (var x=0, y=tam-1; x<tam/2, y>tam/2; i++,j--)
    {
        if (palabra[i] != palabra[j])
            {
                count ++;
            }
    }
            if (count <=2)
            {
                palindrome = true;
            }
            else
            {
                palindrome = false;
            }    
    
    return palindrome;
}