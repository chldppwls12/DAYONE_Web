const nav = document.querySelector('#nav_bar');
const nav_icon = document.querySelector('#nav_icon');
const nav_back = document.querySelector('#nav_top span');

nav_icon.addEventListener('click', () => 
{
    nav.style.right = 0;
})

nav_back.addEventListener('click', () => 
{
    nav.style.right = '-231px';
})