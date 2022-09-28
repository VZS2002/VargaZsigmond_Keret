
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

document.getElementById('darkmode').addEventListener("click", katt);

function katt()
{
    var gomb=document.getElementById('darkmode');
    document.body.classList.toggle('dark-mode');
    if (gomb.textContent=="Dark mode") {gomb.textContent = "Light mode";
gomb.style.backgroundColor='wheat'
gomb.style.color='rgb(51, 51, 51)'}
    else {gomb.textContent = "Dark mode"
    gomb.style.backgroundColor= 'rgb(51, 51, 51)'
    gomb.style.color='wheat'}
    ;
    
}
