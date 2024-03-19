function myFunction(){

    let a = document.getElementById("numero1").value;
    let b = document.getElementById("numero2").value;
    let c = document.getElementById("numero3").value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    document.getElementById("total").innerHTML = " NOTA TOTAL " + ((a + b + c)/3);
 

}