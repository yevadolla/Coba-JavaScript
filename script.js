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

const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';

const judul1 = document.getElementsByTagName('h1')[0];
judul1.setAttribute('name', 'salalii');

const a = document.querySelector('a');

const p2 = document.querySelector('.p2');




