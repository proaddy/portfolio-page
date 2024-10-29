menu = document.getElementsByClassName('menu');
ham = document.getElementById('ham');
cross = document.getElementById('cross');

sidebar = document.getElementsByClassName('sidebar')

menu[0].addEventListener('click', ()=>{
    console.log('ham menu was clicked');
    ham.classList.toggle('invisible');
    cross.classList.toggle('invisible');

    cross.classList.remove('left-3')
    cross.classList.add('left-64')
    sidebar[0].classList.toggle('-translate-x-56')
})