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

//array
var hari = ['senin', 'selasa', 'rabu'];
var mhs = ['Yohana', 'Eva', 'Dolla'];
var myArr = ['teks',2,false];
var myFunc = function(){
    alert('Coba array func');
}
var myArr2 = ['teks',2,false,myFunc,[4,5,6]];

console.log(mhs[2]);
console.log(hari[2]);
console.log(typeof(mhs));
console.log(mhs.length);
console.log(myArr2[4][0]);

//manupulasi array
//menambah isi array
var arr = ["a",1,true];
console.log(arr);

//menghapus isi array
var arr1 = ["Yohana", "Eva", "Dolla"];
arr1[1]=undefined;
console.log(arr2);

//Menampulkan isi array
var arr2 = ["Yohana", "Eva", "Dolla"];
for (var i=0; i<arr2.length; i++){
    console.log('Mahasiswa ke-'+(i+1)+' : '+arr2[i]);
}

//method pd array
//join (gabung seluruh array menjadi string)
var arr3 = ['Taeyong', 'Doyoung', 'Yuta'];
console.log(arr3.join(', '));
//push(nambah diakhir array), pop(hapus, elemen terakhir pecah), shift, unshift
//push dan pop
arr3.push('Jeno', 'Adnan');
arr3.pop();

//unshift(nambah elm baru diawal) dan shift(hps diawal)
arr3.unshift('Yuno', 'Huna');
arr3.shift();

//slice(ambil bag pd array untuk buat baru), splice(menyambung)
//splice
//splice(indxAwal, mauDihapusBerapa, elmBaru1, elmBaru2,...)
var arr4 = ['Karina', 'Winter', 'Ningning', 'Mina', 'Nami', 'Carmen'];
arr4.splice(1, 0, 'Gisel');
console.log(arr4.join(', '));

//slice (awal, akhir)
var arr5 = arr4.slice(3,5);
console.log(arr5.join(', '));

//foreach, map 
//foreach
var ang = [1,2,3,4,5,6,7,8];
var nm = ['Taeyong', 'Doyoung', 'Yuta'];
ang.forEach(function(b){
    console.log(b);
});
nm.forEach(function(e,i){
    console.log('mahasiswa ke-'+i+' = '+e);
});

//map (mengambalikan array)
var ang2 = ang.map(function(b){
    return b*2;
});
console.log(ang2.join(' - '));

//sort
var ang3 = [1,5,3,6,1,4,9,8];
console.log(ang3.join(' - '));
ang3.sort();
console.log(ang3.join(' - '));

var ang4 = [1,10,3,90,1,4,9,8];
console.log(ang4.join(' - '));
ang4.sort(function(a,b){
    return a-b;
});
console.log(ang4.join(' - '));

//filter(banyak nilai), find(mengembalikan 1 nilai)
//filter
var ang5 = [1,10,3,90,1,4,9,8];
var ang6 = ang5.filter(function(x){
    return x > 8;
});
console.log(ang6.join(' - '));

//find
var ang7 = ang5.find(function(x){
    return x > 4;
});
console.log(ang7);