alert('Heloo!')

function jumlahDuaBilangan(a, b){
    var total;
    total = a + b;

    return total;
}
alert(jumlahDuaBilangan(1,2));

function myFunction(){
    document.getElementById("demo4").innerHTML = "Paragraph changed.";
}

//refaktori sederhana/mengsederhanakan perintah
function jmlVolumDuaKubus(a, b){
    return a*a*a + b*b*b;
}
alert(jmlVolumDuaKubus(8, 3));

//variabel scope, variabel hanya punya function itu sendiri

//rekursis, harus punya base case (kondisi akhir)
for (var i = 10; i >= 1; i--){
    console.log(i);
}

function tmpAnggka(n){
    if (n == 0) return;
    console.log(n);
    return tmpAnggka(n-1);
}
tmpAnggka(4);

function faktorial(n){
    if (n == 0) {
        return 1;
    } else {
        return n * faktorial(n-1);
    }
}
alert(faktorial(5));

//deklarasi dan expresi(boleh ga punya nama) fungsi
//function expression (dalam variabel)
var tmplPsn =  function (nama){
    alert(' hal00 ' + nama);
}
tmplPsn('dollaaa');



