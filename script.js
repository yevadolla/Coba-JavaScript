//dom selection
//document.getElementById -> element
const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'Halo Dollaww';

//document.getElementsByTagName()
//-> HTMLCollections
const p = document.getElementsByTagName('p');
for (let i=0; i<p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName()
//-> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Halo adalah kata pertama';

//document.querySelector()
//-> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.backgroundColor = 'orange';

//document.