// //dom selection
// //document.getElementById -> element
// const judul = document.getElementById('judul');
// judul.style.color='red';
// judul.style.backgroundColor = 'green';
// judul.innerHTML = 'Halo Dollaww';

// //document.getElementsByTagName()
// //-> HTMLCollections
// // const p = document.getElementsByTagName('p');
// // for (let i=0; i<p.length; i++){
// //     p[i].style.backgroundColor = 'lightblue';
// // }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// //document.getElementsByClassName()
// //-> HTMLCollections
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Halo adalah kata pertama';

// //document.querySelector()
// //-> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
// li3.style.backgroundColor = 'orange';

// //document.querySelectorAll()

// const p = document.querySelectorAll('p');
// p[2].style.backgroundColor = 'blue';

// //mengubah node root, document nya diganti pake section
// //hanya akan mencari disection tertentu
// const sectionB = document.getElementById('b');
// const p5 = sectionB.querySelector('p');
// p5.style.backgroundColor = 'orange';




//manipulasi DOM
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Halooo Dollaw</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div>paragraffff 1 <p>hahaha</p> </div>   <div>paragraf 2</div>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul1 = document.getElementsByTagName('h1')[0];
// judul1.setAttribute('name', 'salalii');

// const a = document.querySelector('a');

// const p2 = document.querySelector('.p2');

//DOM Manipulation
//buat elemen baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// //simpan tulisan ke paragraf
// pBaru.appendChild(teksPBaru);
// //simpan PBaru diakhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('section#b ul li:nth-child(2)')

// ul.insertBefore(liBaru, li2);

// //remove
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// //replace
// const SectionB = document.getElementById('b');
// const p4 = SectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksBaru = document.createTextNode('Judul Baru ahe');
// h2Baru.appendChild(teksBaru);
// SectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';



// //events
// const p3 = document.querySelector('.p3');

// function ubahWrnP2(){
//     p2.style.backgroundColor = 'pink';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWrnP2;

// function ubahWrnP3(){
//     p3.style.backgroundColor = 'salmon';
// }

// //addEventsListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     p4.style.backgroundColor = 'salmon';
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru ehe');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

//eventsHandler
const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.background = 'blue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

//eventsListener
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'salmon';
// });
// p3.addEventListener('click', function(){
//     p3.style.color = 'blue';
// });
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'salmon';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'pink';
});
